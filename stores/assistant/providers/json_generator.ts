import { $availableRoutes } from "~/configs/routes.config";
import { _AIMJSONGenerator, _AIMStart } from "~/services/assistants.service";
import type { AvailableAssistants } from "~/types/assistants.types";
import type { ServerResponseType } from "~/types/general.types";
import type { JSONGeneratorStateModelType } from "~/types/json_generator.types";


const model = (): JSONGeneratorStateModelType => {
    return deepCopy({
        environments: {
            key_name: 'json_generator',
            conversation_key: null
        },
        progress: {
            input: {
                message: '',
                result: `{
    "user": {
        "fullname": "Add a name here",
        "email": "Add an email here",
        "details": {
            "age": "A random number between 18-65",
            "job": "A random job",
            "salary": "Random salary"
        }
    }
}`,
            },
            output: {
                message: '',
                result: '',
                success: null,
            },
        }
    }) as JSONGeneratorStateModelType;
}

export const useJSONGenerator = defineStore('json_generator', {
    state: () => (model()),
    getters: {},
    actions: {
        async start() {
            try {
                const response = await _AIMStart.get({
                    user_id: useUser().getUserId,
                    key_name: this.environments.key_name,
                });
                if (response.success && response?.data?.result?.conversation_key) {
                    await useAssistant().updateUserAssistantKeys();
                    this.environments.conversation_key = response?.data?.result?.conversation_key;
                    if (this.environments.conversation_key) {
                        await useAssistant().goToAssistantItem('json_generator', this.environments.conversation_key);
                    }
                }
                return response;
            } catch (error: any) {
                throw error;
            }
        },
        async generate() {
            try {
                const response = await _AIMJSONGenerator.post({
                    user_id: useUser().getUserId,
                    data: {
                        value: {
                            message: this.progress.input.message,
                            result: JSON.parse(this.progress.input.result),
                        }
                    }
                }, this.environments.conversation_key!);
                this.setResponse(response);
            }
            catch (error: any) {
                throw error;
            }

        },
        inputProgress(str: string) {
            this.progress.input.result = str;
        },
        outputProgress(str: string) {
            this.progress.output.result = str;
        },
        setResponse(response: ServerResponseType) {
            if(response.success) {
                this.progress.output.message = response?.data?.message;
                this.progress.output.result = JSON.stringify(response?.data?.result, null, 2);
            }
        }
    },
});