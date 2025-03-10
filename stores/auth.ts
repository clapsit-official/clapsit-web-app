import { _UserService } from "~/services/user.service";
import type { AuthStateType, LoginDataType } from "~/types/auth.types";
import type { UserDataType } from "~/types/user.type";

const model: AuthStateType = {
    loginData: {
        access_token: null,
        refresh_token: null,
        expires_in: null,
    },
    emailConfirmRequired: false,
};

export const useAuth = defineStore('auth', {
    state: () => (deepCopy(model) as AuthStateType),
    getters: {
    },
    actions: {
        setAuth(data: LoginDataType) {
            Object.entries(data).forEach(([key, value]) => {
                if (value) {
                    localStorage.setItem(key, value.toString());
                }
            });
            //window.location.reload();
        },
        resetAuth() {
            this.emailConfirmRequired = false;
            Object.keys(this.loginData).forEach(key => {
                localStorage.removeItem(key);
            });
        },
        getAuthCredentials(): LoginDataType {
            const auth_credentials: any = {};
            Object.keys(this.loginData).forEach(key => {
                auth_credentials[key] = localStorage.getItem(key) || null;
            });
            return auth_credentials;
        },
        checkAuthCredentials(): Boolean {
            return !Object.values(this.getAuthCredentials()).some(item => !item)
        },
        async auth() {
            try {
                const response = await _UserService.auth.get();
                useUser().setUserData(response.data as UserDataType);
                return response;
            } catch (error: any) {
                switch (error.message.key) {
                    case 'INVALID_TOKEN': {
                        this.resetAuth();
                        useRouter().push(useRouteManagement().availableRoutes.login);
                        throw error;
                    }
                    case 'EMAIL_CONFIRM_REQUIRED': {
                        this.resetAuth();
                        useRouter().push(useRouteManagement().availableRoutes.login);
                        this.emailConfirmRequired = true;
                        throw error;
                    }
                    default:
                        this.resetAuth();
                        useRouter().push(useRouteManagement().availableRoutes.login);
                        throw error;
                }
            }
        }
    },
})