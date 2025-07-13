import {createI18n, useI18n} from 'vue-i18n';
import type {AvailableLocalItem, LangOptionsType} from "~/constants/types/LocalesType";
import {availableLocales} from "~/assets/locales/index";
import { _UserService } from '~/services/user.service';

export const useI18nStore = defineStore('i18n', {
    state: () => ({
        //@ts-ignore
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
                locale: window?.localStorage?.getItem('lang') || useAppConfig().defaultAppLang,
                messages,
            });
        },
        langOptions(state) {
            return state.availableLocales.map(item => {
                return {
                    label: useI18n().t(item.label),
                    value: item.iso,
                }
            })
        },
    },
    actions: {
        async setAppLang(value: LangOptionsType){
            if(!value) {
                value = availableLocales[1].iso;
            }
            window.localStorage.setItem('lang', value);
            if(useUser().getUserId){
                await _UserService.preferred_lang.patch(useUser().getUserId!, {lang: value})
            }
            window.location.reload();
        }
    }
});