import { resultsByLocale, resultsForClear } from "~/constants/json_generator";
import { _AIMJSONGenerator, _AIMStart } from "~/services/assistants.service";
import type { UserAssistantHistoryItem } from "~/types/assistants.types";
import type { JSONGeneratorStateModelType } from "~/types/json_generator.types";


const model: JSONGeneratorStateModelType = {
    environments: {
        key_name: 'json_generator',
        c_key: null,
        c_id: null,
        save: false
    },
    progress: {
        input: {
            message: '',
            result: '',
        },
        output: {
            message: 'Fill left side with your request and JSON examples',
            result: `{}`,
            success: null,
        },
    }
}



export const useJSONGenerator = defineStore('json_generator', {
    state: () => (deepCopy(model) as JSONGeneratorStateModelType),
    getters: {},
    actions: {
        async start(data: {message?: string | null, result?: string | null}) {
            try {
                const response = await _AIMStart.get({
                    user_id: useUser().getUserId,
                    key_name: this.environments.key_name,
                });
                if (data.message) {
                    window.localStorage.setItem('ai_message', data.message);
                }
                if (data.result) {
                    window.localStorage.setItem('ai_result', data.result);
                }
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
                this.progress.output.message = '';
                const response = await _AIMJSONGenerator.post({
                    user_id: useUser().getUserId,
                    data: {
                        value: {
                            message: this.progress.input.message,
                            //@ts-ignore
                            result: this.progress.input.result.toString(),
                        }
                    }
                }, this.environments.c_key!);
                this.progress.output.message = useI18nStore().i18n.global.t('assistants.json_generator.fetching');
                this.progress.output.result = `{\n\n    \n\n}`;
                this.progress.output.success = null;
                await useAssistant().updateUserAssistantKeys();
                await useAssistant().updateAssistantKeyHistoryById(this.environments.c_id);
                useAssistant().goToAssistantHistoryById();
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
            // this.progress.input.message = '';
            // this.progress.input.result = resultsForClear
        },
        resetOutputProgress() {
            this.progress.output.message = deepCopy(model.progress.output.message);
            this.progress.output.result = deepCopy(model.progress.output.result);
            this.progress.output.success = deepCopy(model.progress.output.success);
        },
        resetEnvironments() {
            this.environments.c_id = deepCopy(model.environments.c_id);
            this.environments.c_key = deepCopy(model.environments.c_key);
            this.environments.key_name = deepCopy(model.environments.key_name);
            this.environments.save = deepCopy(model.environments.save);
        },
        resetToStart() {
            this.resetAll();
            this.progress.input.result = resultsForClear;
        },
        resetAll() {
            this.resetInputProgress();
            this.resetOutputProgress();
        },
        getAPI() {
            useModal().provide('json_generator_curl');
        },
        setAssistantHistory(item: UserAssistantHistoryItem) {
            const apiIntro = 'API: '
            if (item.input.message && item.input.message.startsWith(apiIntro)) {
                this.progress.input.message = deepCopy(item.input.message.split(apiIntro)[1])
            } else {
                this.progress.input.message = item.input.message;
            }
            this.progress.output.message = item.output.message;
            this.progress.output.success = item.output.success;
            if (typeof item.input.result === 'object') {
                this.progress.input.result = JSON.stringify(item.input.result, null, 4);
            } else {
                this.progress.input.result = `${item.input.result}`;
            }

            if (typeof item.output.result === 'object') {
                this.progress.output.result = JSON.stringify(item.output.result, null, 4);
            } else {
                this.progress.output.result = `${item.output.result}`;
            }
        }
    },
});