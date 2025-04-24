import type { AvailableAssistants, UserAssistantKeyItem, UserAssistantHistoryItem } from "~/types/assistants.types";
import { useJSONGenerator } from "./providers/json_generator";
import { useAITranslator } from "./providers/ai_translator";
import { _AIMKeyHistory, _AIMUserKeys } from "~/services/assistants.service";
import { $availableRoutes } from "~/configs/routes.config";

export const useAssistant = defineStore('assistant', {
    state: () => ({
        data: {
            keys: [] as UserAssistantKeyItem[],
            history: [] as UserAssistantHistoryItem[]
        }
    }),
    getters: {
        getProvider(): { [key in AvailableAssistants]: any } {
            return {
                json_generator: () => useJSONGenerator(),
                ai_translator: () => useAITranslator()
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
            if(id) {
                //@ts-ignore
                return this.getProvider[id]();
            }
        }
    },
    actions: {
        resetUserAssistantKeys(){
            this.data.keys = [];
        },
        resetAssistantKeyHistory() {
            this.data.history = [];
        },
        resetAllData() {
            this.resetUserAssistantKeys();
            this.resetAssistantKeyHistory();
            if(this.getCurrentAssistantStore) {
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
            if(item) {
                this.setAssistantHistory(item);
            }
            } else {
                const item = this.data.history[0];
                if(item) {
                    const key = this.getKeyDataByCId(item.c_id);
                    if(key) {
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
                }
            }
        },
        getKeyDataByCId(c_id: number) {
            const c_key = this.data.history.find(item => item.c_id === c_id)?.c_key;
            if(c_key) {
                return this.data.keys.find(item => item.c_key === c_key);   
            }
            return null;
        },
        async goToAssistantItem(assistant: AvailableAssistants, conversation_key: string, c_id?: number) {
            await useRouter().push({
                path: $availableRoutes[assistant],
                query: {
                    c_key: conversation_key,
                    c_id,
                }
            });
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
                    this.data.history = response.data.map((item: UserAssistantHistoryItem) => {
                        const reDesign = item;
                        reDesign.date = new Date(item.date);
                        return reDesign;
                    });
                }
            } catch (error: any) {
                throw error;
            }
        },
        async saveKeyById(key_id: number, save: boolean){
            try {
                await _AIMUserKeys.patch(key_id, {
                    user_id: useUser().getUserId,
                    save
                });
                await this.updateUserAssistantKeys();
            } catch (error: any) {
                throw error;
            }
        },
        async deleteKeyById(key_id: number){
            try {
                await _AIMUserKeys.delete(key_id, {
                    user_id: useUser().getUserId
                });
                await this.updateUserAssistantKeys();
            } catch (error: any) {
                throw error;
            }
        },
        async deleteAllKeysByUserId(){
            try {
                await _AIMUserKeys.delete(null, {
                    user_id: useUser().getUserId
                });
                await this.updateUserAssistantKeys();
            } catch (error: any) {
                throw error;
            }
        },
        async saveHistoryByConversationId(c_id: number, save: boolean){
            try {
                await _AIMKeyHistory.patch(c_id, {
                    user_id: useUser().getUserId,
                    save
                });
                const target = this.getKeyDataByCId(c_id);
                if(target) {
                    this.updateAssistantKeyHistoryById(target.id!);
                }
            } catch (error: any) {
                throw error;
            }
        },
        async deleteHistoryByConversationId(c_id: number){
            try {
                await _AIMKeyHistory.delete(c_id, {
                    user_id: useUser().getUserId,
                });
                const target = this.getKeyDataByCId(c_id);
                if(target) {
                    this.updateAssistantKeyHistoryById(target.id!);
                }
            } catch (error: any) {
                throw error;
            }
        },
    },
});