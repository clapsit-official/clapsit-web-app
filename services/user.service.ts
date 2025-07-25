import type { LangOptionsType } from "~/constants/types/LocalesType";
import type { ServerResponseType } from "~/types/general.types";
import type { ForgotPasswordFieldsType, LoginFieldsType, RegisterFieldsType } from "~/types/getstarted.types";

export const _UserService = {
    signup: {
        async post(data: RegisterFieldsType): Promise<ServerResponseType> {
            return await defineService('register', () => $post('/user/signup', { data }));
        }
    },
    login: {
        async post(data: LoginFieldsType): Promise<ServerResponseType> {
            return await defineService('login', () => $post('/user/login', { data }));
        }
    },
    auth: {
        async get(): Promise<ServerResponseType> {
            return await defineService('auth', () => $get('/user/auth'));
        }
    },
    confirm_email: {
        async get(params: { token: string }): Promise<ServerResponseType> {
            return await defineService('confirm_email', () => $get('/user/confirm_email', { params }));
        }
    },
    reset_password: {
        async get(params: { token: string }): Promise<ServerResponseType> {
            return await defineService('check_reset_password_token', () => $get('/user/reset_password', { params }));
        },
        async post(data: {token: string | null, new_password: string | null} ): Promise<ServerResponseType> {
            return await defineService('reset_password', () => $post('/user/reset_password', { data }));
        }
    },
    logout: {
        async get(): Promise<ServerResponseType> {
            return await defineService('logout', () => $get('/user/logout'));
        }
    },
    forgot_password: {
        async post(data: ForgotPasswordFieldsType ): Promise<ServerResponseType> {
            return await defineService('forgot_password', () => $post('/user/forgot_password', { data }));
        }
    },
    preferred_lang: {
        async patch(user_id: number, data: {lang: LangOptionsType}): Promise<ServerResponseType> {
            return await defineService('set_preferred_lang', () => $patch(`/user/preferred_lang`, { data }, {params: {user_id}}));
        }
    }
}