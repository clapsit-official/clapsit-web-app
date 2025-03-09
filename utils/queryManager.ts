import { headers as endpointHeaders } from "~/configs/endpoint.config.json";
import { useQueryManager } from "~/stores/queryManager";
import type { ServerResponseType, QueryMethods } from '~/types/general.types';

// Define configuration interface for better type safety
interface QueryConfig extends RequestInit {
    baseUrl?: string;
    version?: string;
    timeout?: number;
    retry?: number;
    params?: Record<string, any>;
    data?: any;
}

// Default configuration
const defaultConfig: Partial<QueryConfig> = {
    timeout: 30000, // 30 seconds default timeout
    retry: 0,
};

/**
 * Custom query function with enhanced features
 * @param method HTTP method (GET, POST, PUT, etc.)
 * @param path API endpoint path
 * @param config Configuration object
 * @returns Promise with server response
 */
export async function $query(
    method: QueryMethods,
    path: string = '/',
    config: QueryConfig = {}
): Promise<ServerResponseType> {
    const env = useRuntimeConfig();
    const mergedConfig = { ...defaultConfig, ...config };

    // Build base URL
    const baseUrl = mergedConfig.baseUrl || env.public.href || window.location.href;
    const API_URL = new URL(baseUrl);

    // Set port if provided and not using default href
    if (!env.public.href && env.public.port) {
        API_URL.port = env.public.port;
    }

    // Construct full path
    API_URL.pathname = `/${env.public.base || ''}/${mergedConfig.version || env.public.version || ''}${path}`.replace(/\/+/g, '/');

    // Handle query parameters
    if (mergedConfig.params && Object.keys(mergedConfig.params).length > 0) {
        API_URL.search = new URLSearchParams(mergedConfig.params).toString();
    }

    const accessToken = useAuth().getAuthCredentials().access_token;

    const requestHeaders: any = {
        'Content-Type': 'application/json',
        ...Object.fromEntries(Object.entries(endpointHeaders).filter(([key]) => key.toLowerCase() !== 'content-type')),
        ...mergedConfig.headers,
    };
    if (accessToken) {
        requestHeaders['Authorization'] = `Bearer ${accessToken}`;
    }
    // Prepare fetch options
    const fetchOptions: RequestInit = {
        method,
        headers: requestHeaders,
        //@ts-ignore
        ...((method !== 'GET' && method !== 'HEAD' && mergedConfig.data) && {
            body: JSON.stringify(mergedConfig.data)
        }),
        ...mergedConfig,
    };

    // Timeout implementation
    const controller = new AbortController();
    const timeoutId = mergedConfig.timeout
        ? setTimeout(() => controller.abort(), mergedConfig.timeout)
        : null;

    fetchOptions.signal = controller.signal;

    // Retry logic
    let lastError: any;
    const maxAttempts = mergedConfig.retry! + 1;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const response = await fetch(API_URL, fetchOptions);

            clearTimeout(timeoutId as any);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({
                    success: false,
                    message: response.statusText,
                    status: response.status,
                    data: {}
                }));
                throw errorData;
            }

            const data = await response.json();
            return data;


        } catch (error: any) {
            lastError = error;

            // Don't retry on 4xx errors or last attempt
            if (
                attempt === maxAttempts ||
                (error.status && error.status >= 400 && error.status < 500)
            ) {
                throw {
                    success: false,
                    message: error.message || 'REQUEST_FAILED',
                    status: error.status || 500,
                    data: error.data || {},
                };
            }

            // Exponential backoff
            await new Promise(resolve =>
                setTimeout(resolve, Math.pow(2, attempt) * 100)
            );
        }
    }

    throw lastError; // This line should never be reached due to the throw in the loop
}

// Convenience methods
export const $get = (path: string, config?: QueryConfig) =>
    $query('GET', path, config);

export const $post = (path: string, config?: QueryConfig) =>
    $query('POST', path, config);

export const $put = (path: string, config?: QueryConfig) =>
    $query('PUT', path, config);

export const $patch = (path: string, config?: QueryConfig) =>
    $query('PATCH', path, config);

export const $delete = (path: string, config?: QueryConfig) =>
    $query('DELETE', path, config);


/**
 *  Example usage:

    // Basic GET request
    const response = await $get('/users');

    // GET with query params
    const users = await $get('/users', {
    params: { limit: 10, page: 1 }
    });

    // POST request with data
    const newUser = await $post('/users', {
    data: { name: 'John', email: 'john@example.com' },
    timeout: 5000,
    retry: 2
    });

    // Custom configuration
    const customRequest = await $query('GET', '/data', {
    headers: { 'X-Custom-Header': 'value' },
    params: { filter: 'active' },
    timeout: 10000,
    });

**/

export async function defineService(id: string, service: () => Promise<ServerResponseType>) {
    const queryKey = useQueryManager().setQuery(id);
    try {
        const response = await service();
        response.message = formatResponseMessage(response.message);
        useQueryManager().setResponse(queryKey, response);
        return response;
    } catch (error: any) {
        error.service = id
        error.message = formatResponseMessage(error.message);
        useQueryManager().setResponse(queryKey, error);
        throw error;
    }
}

function formatResponseMessage(message: any) {
    if (message) {
        return {
            key: message,
            text: useI18nStore().i18n.global.t(`backend_messages.${message}`),
        };
    }
    return null
}