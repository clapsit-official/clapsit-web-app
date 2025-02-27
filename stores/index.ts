import { defineStore } from "pinia";

export const useCoreAppStore = defineStore('app', {
    state: () => ({
        brand: 'clapsit',
    }),
    getters: {
        getBrandName(state){
            return capitalizeFirstLetter(state.brand);
        },
        getBrandDomain(state) {
            return `https://${state.brand}.com`
        },
        getPublicLogo(state) {
            return `https://${state.brand}.com/logo.png`
        }
    },
    actions: {

    }
})