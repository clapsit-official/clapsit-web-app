import type { ServerResponseType } from "~/types/general.types";
import type { LoginFieldsType, RegisterFieldsType } from "~/types/getstarted.types";

export const _UserService = {
    signup: {
        async post(data: RegisterFieldsType): Promise<ServerResponseType> {
            return await defineService('register', () => $post('/user/signup', {data}));
        }
    },
    login: {
        async post(data: LoginFieldsType): Promise<ServerResponseType> {
            return await defineService('login', () => $post('/user/login', {data}));
        }
    },
    auth: {
        async get(): Promise<ServerResponseType> {
            return await defineService('auth', () => $get('/user/auth'));
        }
    },
    confirm_email: {
        async get(params: {token: string}): Promise<ServerResponseType> {
            return await defineService('confirm_email', () => $get('/user/confirm_email', {params}));
        }
    },
    logout: {
        async get(): Promise<ServerResponseType> {
            return await defineService('logout', () => $get('/user/logout'));
        }
    },
}