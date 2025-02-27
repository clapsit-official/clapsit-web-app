import {createI18n, useI18n} from 'vue-i18n';
import type {AvailableLocalItem, AvailableLocals, LangOptionsType} from "~/constants/types/LocalesType";
import {availableLocales} from "~/assets/locales/index";

let appLang: LangOptionsType;

export const useI18nStore = defineStore('i18n', {
    state: () => ({
        //@ts-ignore
        appLang: 'en-US',
        availableLocales,
    }),
    getters: {
        i18n(state) {
            let messages: any = {};

            state.availableLocales.forEach((local: AvailableLocalItem) => {
                messages[`${local.iso}`] = local.messages;
            })

            return createI18n({
                legacy: false,
                globalInjection: true,
                // @ts-ignore
                locale: state.appLang || useAppConfig().defaultAppLang,
                messages,
            });
        },
    },
    actions: {
    }
});