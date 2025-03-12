import { _UserService } from "~/services/user.service";
import type { GetStartedType } from "~/types/getstarted.types";
import { useAuth } from "./auth";

const model: GetStartedType = {
    loadingFor: null,
    login: {
        email: null,
        password: null
    },
    register: {
        fullname: null,
        email: null,
        password: null
    }
}
export const useGetstarted = defineStore('getstarted', {
    state: () => (deepCopy(model) as GetStartedType),
    getters: {
        registerReadyForSubmit(): boolean {
            //@ts-ignore
            return Object.values(this.register).every(item => item !== null);
        },
        loginReadyForSubmit(): boolean {
            //@ts-ignore
            return Object.values(this.login).every(item => item !== null);
        }
    },
    actions: {
        async createAccount() {
            return await _UserService.signup.post(this.register);
        },
        async loginIn() {
            useAuth().resetAuth();
            return await _UserService.login.post(this.login);
        },
        passToLogin() {
            this.login.email = deepCopy(this.register.email);
            this.reset(this.register);
        },
        passToRegister() {
            this.register.email = deepCopy(this.login.email);
            this.reset(this.login);
        },
        reset(target: any) {
            Object.keys(target).forEach((key: string) => { target[key as keyof typeof target] = null });
        },
    }
});