import type { UserDataType } from "~/types/user.type";

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
        }
    }
})