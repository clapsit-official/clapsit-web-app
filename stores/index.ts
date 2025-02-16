import { defineStore } from "pinia";

export const useCoreAppStore = defineStore('app', {
    state: () => ({
        brand: 'clapsit',
    }),
    getters: {
        getBrandName(state){
            return capitalizeFirstLetter(state.brand);
        }
    },
    actions: {

    }
})