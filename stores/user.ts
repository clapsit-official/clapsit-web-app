import type { UserDataType } from "~/types/user.type";
import {_UserService} from "~/services/user.service";
import {$availableRoutes} from "~/configs/routes.config";

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
        },
        async confirmEmail(token: string) {
            return await _UserService.confirm_email.get({token});
        }
    }
})