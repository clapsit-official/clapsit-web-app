import {headers} from "~/configs/endpoint.config.json";
import type { ServerResponseType, QueryMethods } from '~/types/general.types';

export async function $ask(method: QueryMethods, path: string = '/', params?: object, init?: RequestInit): Promise<ServerResponseType> {
    try {
        const env = useRuntimeConfig();
        const API_URL = new URL(env.public.href || window.location.href);
        if (!env.public.href) { API_URL.port = env.public.port }
        API_URL.pathname = `/${env.public.base}/${env.public.version}${path}`;
        
        if(Object.keys({...params}).length > 0){
            API_URL.search = new URLSearchParams({...params}).toString();
        }
        
        const API_PROMISE: Promise<ServerResponseType> = new Promise(async (resolve, reject) => {
            let response = await fetch(API_URL, {
                method,
                headers,
                ...init,
            });
            if (response.ok) {
                let data = await response.json();
                resolve(data);
            } else {
                response.json()
                    .then((data) => {
                        reject(data)
                    })
                    .catch(() => {
                        reject({ 
                            success: response.ok, 
                            message: response.statusText, 
                            status: response.status, 
                            data: {}
                        });
                    })
            }
        });
        return API_PROMISE;
    } catch (error: any) {
        throw ({ 
            success: false, 
            message: 'SOMETHING_WENT_WRONG', 
            status: 500, 
            data: { error } 
        });
    }
}
