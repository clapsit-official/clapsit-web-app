import type { IconsTypes } from "~/assets/icons/materialIconsList";

export type AvailableModals = 'user_account' | 'logout' | 'json_generator' | 'json_generator_curl' | 'ai_translator' | 'session_expired';

type ModalItemType = {
    label: string,
    icon: IconsTypes,
    key: string | null
}

type ModalStateModelType = {
    modals: { [key in AvailableModals]: ModalItemType } | {},
    providedList: AvailableModals[]
};

const model = (): ModalStateModelType => {
    return {
        modals: {
            user_account: {
                label: useI18nStore().i18n.global.t('modals.user_account.label'),
            },
            logout: {
                label: useI18nStore().i18n.global.t('buttons.logout'),
            },
            json_generator: {
                label: useI18nStore().i18n.global.t('assistants.json_generator.label'),
            },
            json_generator_curl: {
                label: useI18nStore().i18n.global.t('assistants.json_generator.curl_label'),
            },
            ai_translator: {
                label: useI18nStore().i18n.global.t('assistants.ai_translator.label'),
            },
            session_expired: {
                label: null,
            }
        },
        providedList: []
    }
}

export const useModal = defineStore('modal', {
    state: () => (deepCopy(model()) as ModalStateModelType),
    getters: {
        views(state) {
            return state.providedList.map((item: AvailableModals) => {
                //@ts-ignore
                state.modals[item]['key'] = item;
                //@ts-ignore
                return state.modals[item];
            })
        }
    },
    actions: {
        provide(modalKey: AvailableModals) {
            if (this.providedList.includes(modalKey)) {
                this.deprive(modalKey);
            }
            this.providedList.push(modalKey);
        },
        deprive(modalKey: AvailableModals) {
            const index = this.providedList.findIndex(item => item === modalKey);
            this.providedList.splice(index, 1);
        },
    }
});
