import type { AvailableAssistants, UserAssistantKeyItem } from "~/types/assistants.types";
import { useJSONGenerator } from "./providers/json_generator";
import { _AIMUserKeys } from "~/services/assistants.service";
import { $availableRoutes } from "~/configs/routes.config";

export const useAssistant = defineStore('assistant', {
    state: () => ({
        data: {
            keys: [] as UserAssistantKeyItem[]
        }
    }),
    getters: {
        getProvider(): {[key in AvailableAssistants]: any} {
            return {
                json_generator: () => useJSONGenerator()
            }
        },
        getUserAssistantKeys(state): UserAssistantKeyItem[] {
            return state.data.keys;
        }
    },
    actions: {
        async updateUserAssistantKeys() {
            try {
                const response = await _AIMUserKeys.get({
                    user_id: useUser().getUserId,
                });
                if(response.success && response?.data) {
                    this.data.keys = response.data.map((item: UserAssistantKeyItem) => {
                        const reDesign = item;
                        reDesign.date = new Date(item.date);
                        return reDesign;
                    });
                }
            } catch(error: any) {
                throw error;
            }     
        },
        async goToAssistantItem(assistant: AvailableAssistants, conversation_key: string) {
            await useRouter().push(`${$availableRoutes[assistant]}?c_key=${conversation_key}`);
        }
    },
});