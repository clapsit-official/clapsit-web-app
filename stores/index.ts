import { defineStore } from "pinia";

export const useCoreAppStore = defineStore('app', {
    state: () => ({
        message: "Hello world"
    }),
    getters: {
        getMessage(state){
            return `${state.message}!!!`
        }
    },
    actions: {

    }
})