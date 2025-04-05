import { $availableRoutes } from "~/configs/routes.config";
import { _StartAssistant } from "~/services/assistants.service";
import type { AvailableAssistants } from "~/types/assistants.types";

type JSONGeneratorStateModelType = {
    environments: {
        key_name: AvailableAssistants,
        conversation_key: string | null
    },
}

const model = (): JSONGeneratorStateModelType  => {
    return deepCopy({
        environments: {
            key_name: 'json_generator',
            conversation_key: null
        } 
    }) as JSONGeneratorStateModelType;
}

export const useJSONGenerator = defineStore('json_generator', {
   state: () => (model()),
   getters: {},
   actions: {
    async start() {
        try {
            const response = await _StartAssistant.get({
                user_id: useUser().getUserId,
                key_name: this.environments.key_name,
            });
            if(response.success && response?.data?.result?.conversation_key) {
                await useAssistant().updateUserAssistantKeys();
                this.environments.conversation_key = response?.data?.result?.conversation_key;
                if(this.environments.conversation_key){
                    await useAssistant().goToAssistantItem('json_generator', this.environments.conversation_key);
                }
            }
            return response;
        } catch(error: any) {
            throw error;
        }
    },
   },
});