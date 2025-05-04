import { all_languages } from "~/constants/general";
import { _AIMAITranslator, _AIMStart } from "~/services/assistants.service";
import type { AITranslatorStateModelType } from "~/types/ai_translator.types";
import type { UserAssistantHistoryItem } from "~/types/assistants.types";


const model: AITranslatorStateModelType = {
    environments: {
        key_name: 'ai_translator',
        c_key: null,
        c_id: null,
        save: false
    },
    progress: {
        input: {
            data: {
                to_lang: null,
                from_lang: "detect",
                input: ""
            },
        },
        output: {
            message: "",
            success: false,
            result: {
                to_lang: "",
                from_lang: "",
                output: {
                    result: "",
                    unique_and_rarely: []
                }
            },

        },
    }
}


export const useAITranslator = defineStore('ai_translator', {
    state: () => (deepCopy(model) as AITranslatorStateModelType),
    getters: {
        from_lang_options(state) {
            return [
                {
                    label: 'Auto',
                    value: "detect"
                },
                ...all_languages
            ];
        },
        to_lang_options(state){
            return [
                ...all_languages,
            ];
        }

    },
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
                let readyToSubmit: boolean = true;
                
                if(!this.progress.input.data.input) {
                    readyToSubmit = false;
                } else if(this.progress.input.data.input.length === 0) {
                    readyToSubmit = false;
                }

                if(!this.progress.input.data.to_lang){
                    readyToSubmit = false;
                }

                if(readyToSubmit){
                    this.progress.output.message = '';
                    const response = await _AIMAITranslator.post({
                        user_id: useUser().getUserId,
                        data: {
                            value: this.progress.input
                        }
                    }, this.environments.c_key!);
                    
                    this.progress.output.message = useI18nStore().i18n.global.t('assistants.ai_translator.fetching');
                    this.progress.output.result = deepCopy(model.progress.output.result);
                    this.progress.output.success = null;
                    await useAssistant().updateUserAssistantKeys();
                    await useAssistant().updateAssistantKeyHistoryById(this.environments.c_id);
                    useAssistant().goToAssistantHistoryById();
                }
            }
            catch (error: any) {
                throw error;
            }

        },
        resetInputProgress() {
            this.progress.input.data.input = deepCopy(model.progress.input.data.input);
            this.progress.input.data.to_lang = deepCopy(model.progress.input.data.to_lang);
            this.progress.input.data.from_lang = deepCopy(model.progress.input.data.from_lang);
        },
        resetOutputProgress() {
            this.progress.output.message = deepCopy(model.progress.output.message);
            this.progress.output.success = deepCopy(model.progress.output.success);
            this.progress.output.result.from_lang = deepCopy(model.progress.output.result.from_lang);
            this.progress.output.result.to_lang = deepCopy(model.progress.output.result.to_lang);
            this.progress.output.result.output.result = deepCopy(model.progress.output.result.output.result);
            this.progress.output.result.output.unique_and_rarely = deepCopy(model.progress.output.result.output.unique_and_rarely);
        },
        resetEnvironments() {
            this.environments.c_id = deepCopy(model.environments.c_id);
            this.environments.c_key = deepCopy(model.environments.c_key);
            this.environments.key_name = deepCopy(model.environments.key_name);
            this.environments.save = deepCopy(model.environments.save);
        },
        resetAll() {
            this.resetInputProgress();
            this.resetOutputProgress();
        },
        setAssistantHistory(item: UserAssistantHistoryItem) {
            this.environments.c_id = item.c_id;
            this.environments.c_key = item.c_key;
            this.progress.input.data.input = item.input.data.input;
            this.progress.input.data.to_lang = item.input.data.to_lang ? item.input.data.to_lang.toLowerCase() : null;
            this.progress.input.data.from_lang = item.output.result?.from_lang ? item.output.result?.from_lang.toLowerCase() : null;
            this.progress.output.result.output.result = item.output.result?.output.result;
            this.progress.output.result.output.unique_and_rarely = item.output.result?.output.unique_and_rarely;
            this.progress.output.result.from_lang = item.output.result?.from_lang ?  item.output.result?.from_lang.toLowerCase() : null;
            this.progress.output.result.to_lang = item.output.result?.to_lang ? item.output.result?.to_lang.toLowerCase() : null
            this.progress.output.message = item.output.message;   
        },
        reverseProgress() {
            const input = deepCopy(this.progress.input.data);
            const output = deepCopy(this.progress.output.result);

            this.progress.input.data.from_lang = input.to_lang;
            this.progress.input.data.to_lang = input.from_lang;
            this.progress.input.data.input = output.output.result;
            this.progress.output.result.output.result = '';
            this.progress.output.result.output.unique_and_rarely = [];
            this.generate();
        }
    },
});