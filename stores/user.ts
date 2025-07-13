import type { UserDataType } from "~/types/user.type";
import {_UserService} from "~/services/user.service";
import type {ForgotPasswordFieldsType, LoginFieldsType, RegisterFieldsType} from "~/types/getstarted.types";

type UserStateType = {
    data: UserDataType
}

const model: UserStateType = {
    data: {
        user_id: null,
        details: {
            fullname: null,
            email: null,
            phone: null,
            birthday: null,
            bio: null,
            email_registered: null,
            preferred_lang: null,
            profile_photo_id: null,
        }
    }
}

export const useUser = defineStore('user', {
    state: () => (deepCopy(model) as UserStateType),
    getters: {
        getUserId(state){
            return state.data.user_id;
        },
        getUserDetails(state) {
            return state.data.details;
        }
    },
    actions: {
        setUserData(data: UserDataType) {
            this.data = {...data};
            if(this.data.details.preferred_lang && this.data.details.preferred_lang !== window.localStorage.getItem('lang')){
                useI18nStore().setAppLang(this.data.details.preferred_lang);
            }
        },
        async registerQuery(register: RegisterFieldsType) {
            return await _UserService.signup.post(register);
        },
        async loginInQuery(login: LoginFieldsType) {
            return await _UserService.login.post(login);
        },
        async confirmEmailQuery(token: string) {
            return await _UserService.confirm_email.get({token});
        },
        async checkResetPasswordTokenQuery(token: string) {
            return await _UserService.reset_password.get({token});
        },
        async setNewPasswordQuery(token: string, new_password: string) {
            return await _UserService.reset_password.post({token, new_password});
        },
        async logoutQuery() {
            return await _UserService.logout.get();
        },
        async logoutUser() {
            await this.logoutQuery().then(() => {
                useAuth().resetAuth();
                window.location.reload();
            });
        },
        async sendLinkForResetPasswordQuery(forgotPassword: ForgotPasswordFieldsType) {
            return await _UserService.forgot_password.post(forgotPassword);
        }

    }
});