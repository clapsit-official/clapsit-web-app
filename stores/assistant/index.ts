import type { AvailableAssistants, UserAssistantKeyItem, UserAssistantHistoryItem } from "~/types/assistants.types";
import { useJSONGenerator } from "./providers/json_generator";
import { _AIMKeyHistory, _AIMUserKeys } from "~/services/assistants.service";
import { availableRoutes } from "~/configs/routes.config";
import { resultsForClear, resultsByLocale, resultsWithMessage, resultPresets } from "~/constants/json_generator";

export const useAssistant = defineStore('assistant', {
    state: () => ({
        data: {
            keys: [] as UserAssistantKeyItem[],
            history: [] as UserAssistantHistoryItem[],
            recently_history: [] as UserAssistantHistoryItem[],
            saved_history: [] as UserAssistantHistoryItem[],
        }
    }),
    getters: {
        getProvider(): { [key in AvailableAssistants]: any } {
            return {
                json_generator: () => useJSONGenerator(),
            }
        },
        getUserAssistantKeys(state): UserAssistantKeyItem[] {
            return state.data.keys;
        },
        getAssistantKeyHistory(state): UserAssistantHistoryItem[] {
            return state.data.history;
        },
        getCurrentAssistantStore() {
            const { id } = useRoute().params;
            if (id) {
                //@ts-ignore
                return this.getProvider[id]();
            }
        },
        getSavedAssistantKeyHistory(state) {
            state.data.saved_history.forEach((history, index) => {
                const keyData = state.data.keys.find(key => key.c_key === history.c_key);
                if(keyData) {
                    state.data.saved_history[index].key_name = keyData.key_name 
                }
            })
            return state.data.saved_history;
        },
        getRecentlyAssistantKeyHistory(state) {
            state.data.recently_history.forEach((history, index) => {
                const keyData = state.data.keys.find(key => key.c_key === history.c_key);
                if(keyData) {
                    state.data.recently_history[index].key_name = keyData.key_name 
                }
            })
            return state.data.recently_history;
        }
    },
    actions: {
        resetUserAssistantKeys() {
            this.data.keys = [];
        },
        resetAssistantKeyHistory() {
            this.data.history = [];
        },
        resetAllData() {
            this.resetUserAssistantKeys();
            this.resetAssistantKeyHistory();
            if (this.getCurrentAssistantStore) {
                this.getCurrentAssistantStore.resetAll();
            }
        },
        setAssistantHistory(item: UserAssistantHistoryItem) {
            this.getCurrentAssistantStore?.setAssistantHistory(item);
        },
        goToAssistantHistoryById(cId?: number | null) {
            this.getCurrentAssistantStore?.resetAll();
            if (cId) {
                const item = this.data.history.find((item) => item.c_id === cId);
                if (item) {
                    this.setAssistantHistory(item);
                }
            } else {
                const item = this.data.history[0];
                if (item) {
                    const key = this.getKeyDataByCId(item.c_id);
                    if (key) {
                        useRouter().push({
                            path: key?.key_name,
                            query: {
                                c_key: item.c_key,
                                c_id: item.c_id,
                            }
                        })
                    } else {
                        console.error('Something went wrong. key not found');
                    }
                } else {
                    const messageFromStart = window.localStorage.getItem('ai_message');
                    const resultFromStart = window.localStorage.getItem('ai_result');
                    const lang = window.localStorage.getItem('lang');
                    if (messageFromStart) {
                        useJSONGenerator().progress.input.message = messageFromStart;
                        if (lang && lang !== 'null' && lang !== 'undefined' && lang !== '') {
                            // @ts-ignore
                            useJSONGenerator().progress.input.result = resultsWithMessage[lang] || resultsWithMessage["en-US"];
                        } else {
                            useJSONGenerator().progress.input.result = resultsWithMessage["en-US"];
                        }
                    } else {
                        useJSONGenerator().progress.input.message = useI18nStore().i18n.global.t('assistants.json_generator.example_message');
                        if (lang && lang !== 'null' && lang !== 'undefined' && lang !== '') {
                            // @ts-ignore
                            useJSONGenerator().progress.input.result = resultsByLocale[lang] || resultsByLocale["en-US"];
                        } else {
                            useJSONGenerator().progress.input.result = resultsByLocale["en-US"];
                        }
                    }
                    if(resultFromStart) {
                        const target = resultPresets.find(item => item.key === resultFromStart);
                        if(target?.result) {
                            useJSONGenerator().progress.input.result = target.result;
                            useJSONGenerator().progress.input.message = `${useI18nStore().i18n.global.t('assistants.json_generator.generate')} -> ${useI18nStore().i18n.global.t('assistants.json_generator.presets.' + target.key)}`;
                        }
                    }
                }
            }
        },
        getKeyDataByCId(c_id: number) {
            const c_key = this.data.history.find(item => item.c_id === c_id)?.c_key;
            if (c_key) {
                return this.data.keys.find(item => item.c_key === c_key);
            }
            return null;
        },
        async goToAssistantItem(assistant: AvailableAssistants, conversation_key: string, c_id?: number, withReload = true) {
            if(withReload) {
                window.location.href = `${availableRoutes[assistant]}?c_key=${conversation_key}&c_id=${c_id || null}`;
            } else {
                await useRouter().push({
                    path: availableRoutes[assistant],
                    query: {
                        c_key: conversation_key,
                        c_id: c_id || null,
                    }
                });
            }
        },
        async updateUserAssistantKeys() {
            try {
                const response = await _AIMUserKeys.get({
                    user_id: useUser().getUserId,
                });
                if (response.success && response?.data) {
                    this.data.keys = response.data.map((item: UserAssistantKeyItem) => {
                        const reDesign = item;
                        reDesign.date = new Date(item.date);
                        return reDesign;
                    });
                }
            } catch (error: any) {
                throw error;
            }
        },
        async updateAssistantKeyHistoryById(key_id: number | null) {
            try {
                const response = await _AIMKeyHistory.get({
                    user_id: useUser().getUserId,
                    key_id
                });
                if (response.success && response?.data && response?.data?.length) {
                    const histories: UserAssistantHistoryItem[] = response.data.map((item: UserAssistantHistoryItem) => {
                        const reDesign = item;
                        reDesign.date = new Date(item.date);
                        return reDesign;
                    });
                    this.data.history = histories.filter(item => {
                        return true
                    });
                }
            } catch (error: any) {
                throw error;
            }
        },
        async saveKeyById(key_id: number, save: boolean) {
            const target = useAssistant().data.keys.find(item => item.id === key_id);
            if (target) {
                target.save = save;
            }
            try {
                await _AIMUserKeys.patch(key_id, {
                    user_id: useUser().getUserId,
                    save
                });
                //await this.updateUserAssistantKeys();
            } catch (error: any) {
                throw error;
            }
        },
        async deleteKeyById(key_id: number) {
            const target = useAssistant().data.keys.findIndex(item => item.id === key_id);
            if (target) {
                useAssistant().data.keys.splice(target, 1);
            }
            try {
                await _AIMUserKeys.delete(key_id, {
                    user_id: useUser().getUserId
                });
                //await this.updateUserAssistantKeys();
            } catch (error: any) {
                throw error;
            }
        },
        async deleteAllKeysByUserId() {
            try {
                await _AIMUserKeys.delete(null, {
                    user_id: useUser().getUserId
                });
                await this.updateUserAssistantKeys();
            } catch (error: any) {
                throw error;
            }
        },
        async saveHistoryByConversationId(c_id: number, save: boolean) {
            const target = useAssistant().data.history.find(item => item.c_id === c_id);
            if (target) {
                target.save = save;
            }
            try {
                await _AIMKeyHistory.patch(c_id, {
                    user_id: useUser().getUserId,
                    save
                });
                const target = this.getKeyDataByCId(c_id);
                if (target) {
                    //this.updateAssistantKeyHistoryById(target.id!);
                }
            } catch (error: any) {
                throw error;
            }
        },
        async deleteHistoryByConversationId(c_id: number) {
            const target = useAssistant().data.history.findIndex(item => item.c_id === c_id);
            if (target) {
                useAssistant().data.history.splice(target, 1);
            }
            try {
                await _AIMKeyHistory.delete(c_id, {
                    user_id: useUser().getUserId,
                });
                const target = this.getKeyDataByCId(c_id);
                if (target) {
                    //this.updateAssistantKeyHistoryById(target.id!);
                }
            } catch (error: any) {
                throw error;
            }
        },
        async getRecentlyKeyHistories() {
            if(this.data.keys.length){
                try {
                    const response = await _AIMKeyHistory.get({
                        user_id: useUser().getUserId,
                    }, 'recently');
                    if (response.success && response?.data && response?.data?.length) {
                        this.data.recently_history = response.data.map((item: UserAssistantHistoryItem) => {
                            const reDesign = item;
                            reDesign.date = new Date(item.date);
                            return reDesign;
                        });
                    }
                } catch (error: any) {
                    throw error;
                }
            }
        },
        async getSavedKeyHistories() {
            if(this.data.keys.length){
                try {
                    const response = await _AIMKeyHistory.get({
                        user_id: useUser().getUserId,
                    }, 'saved');
                    if (response.success && response?.data && response?.data?.length) {
                        this.data.saved_history = response.data.map((item: UserAssistantHistoryItem) => {
                            const reDesign = item;
                            reDesign.date = new Date(item.date);
                            return reDesign;
                        });
                    }
                } catch (error: any) {
                    throw error;
                }
            }
        }
    },
});