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
        async goToAssistantItem(assistant: AvailableAssistants, conversation_key: string, c_id?: number) {
            await useRouter().push({
                path: $availableRoutes[assistant],
                query: {
                    c_key: conversation_key,
                    c_id,
                }
            });
        },
        setAssistantHistory(item: UserAssistantHistoryItem) {
            this.getCurrentAssistantStore?.setAssistantHistory(item);
        },
        goToAssistantHistoryById(cId?: number | null) {
            this.getCurrentAssistantStore.resetAll();
            if (cId) {
                const item = this.data.history.find((item) => item.c_id === cId);
            if(item) {
                this.setAssistantHistory(item);
            }
            } else {
                const item = this.data.history[0];
                if(item) {
                    this.setAssistantHistory(item);
                }
            }
        }

    },
});