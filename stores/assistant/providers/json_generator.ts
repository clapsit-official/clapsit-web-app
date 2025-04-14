import { _AIMJSONGenerator, _AIMStart } from "~/services/assistants.service";
import type { ServerResponseType } from "~/types/general.types";
import type { JSONGeneratorStateModelType } from "~/types/json_generator.types";


const model: JSONGeneratorStateModelType = {
    environments: {
        key_name: 'json_generator',
        c_key: null,
        c_id: null
    },
    progress: {
        input: {
            message: '',
            result: `{\n    "request": {} \n}`,
        },
        output: {
            message: '',
            result: '',
            success: null,
        },
    }
}


export const useJSONGenerator = defineStore('json_generator', {
    state: () => (deepCopy(model) as JSONGeneratorStateModelType),
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
                    this.environments.c_key = response?.data?.result?.conversation_key;
                    
                    if (this.environments.c_key) {
                        await useAssistant().goToAssistantItem(this.environments.key_name, this.environments.c_key);
                    }
                }
                return response;
            } catch (error: any) {
                throw error;
            }
        },
        async generate() {
            try {
                this.resetOutputProgress();
                const response = await _AIMJSONGenerator.post({
                    user_id: useUser().getUserId,
                    data: {
                        value: {
                            message: this.progress.input.message,
                            result: JSON.parse(this.progress.input.result),
                        }
                    }
                }, this.environments.c_key!);
                await useAssistant().updateUserAssistantKeys();
                await useAssistant().updateAssistantKeyHistoryById(this.environments.c_id);
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
        resetInputProgress() {
            this.progress.input.message = model.progress.input.message;
            this.progress.input.result = model.progress.input.result;
        },
        resetOutputProgress() {
            this.progress.output.message = model.progress.output.message
            this.progress.output.result = model.progress.output.result
            this.progress.output.success = model.progress.output.success;
        },
        resetEnvironments() {
            this.environments.c_id = model.environments.c_id;
            this.environments.c_key = model.environments.c_key;
            this.environments.key_name = model.environments.key_name;
        },
        resetAll() {
            this.resetInputProgress();
            this.resetOutputProgress();
        }
    },
});