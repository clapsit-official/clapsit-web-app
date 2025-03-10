import { defineStore } from "pinia";
import { _HealthService } from "~/services/health.service";
import { useDeviceDetector } from '~/composables/useWindowSize';
import type { DeviceTypes } from "~/types/general.types";

export const useCoreAppStore = defineStore('app', {
    state: () => ({
        brand: 'clapsit',
        health: null as boolean | null,
        deviceType: null as DeviceTypes,
    }),
    getters: {
        getBrandName(state) {
            return capitalizeFirstLetter(state.brand);
        },
        getBrandDomain(state) {
            return `https://${state.brand}.com`;
        },
        getPublicLogo(state) {
            return `https://${state.brand}.com/logo.png`;
        },
        getDeviceType(state): DeviceTypes {
            return state.deviceType;
        }
    },
    actions: {
        async checkHealth() {
            try {
                const { success } = await _HealthService.get();
                this.health = success;
            } catch (error: any) {
                this.health = false;
                setTimeout(async() => await useCoreAppStore().checkHealth(), 10000);
            }
        },
        setDeviceType(val: any){
           this.deviceType = val;
           return this.deviceType;
        }
    }
})