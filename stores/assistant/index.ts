import type { AvailableAssistants, UserAssistantKeyItem, UserAssistantHistoryItem } from "~/types/assistants.types";
import { useJSONGenerator } from "./providers/json_generator";
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
                json_generator: () => useJSONGenerator()
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
                if (response.success && response?.data) {
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
        },
        async goToAssistantItem(assistant: AvailableAssistants, conversation_key: string, c_id?: number) {
            await useRouter().push({
                path: $availableRoutes[assistant],
                query: {
                    c_id,
                    c_key: conversation_key,
                }
            });
        },
        setAssistantHistory(item: UserAssistantHistoryItem) {
            this.getCurrentAssistantStore.progress.input.message = item.input.message;
            this.getCurrentAssistantStore.progress.output.message = item.output.message;
            this.getCurrentAssistantStore.progress.output.success = item.output.success;
            if(typeof item.input.result === 'object') {
                this.getCurrentAssistantStore.progress.input.result = JSON.stringify(item.input.result, null, 4);
            } else {
                this.getCurrentAssistantStore.progress.input.result = `${item.input.result}`;
            }
           
            if(typeof item.output.result === 'object') {
                this.getCurrentAssistantStore.progress.output.result = JSON.stringify(item.output.result, null, 4);
            } else {
                this.getCurrentAssistantStore.progress.output.result = `${item.output.result}`;
            }
        }
    },
});