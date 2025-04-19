import type { AssistantEnvironmentsType } from "./assistants.types"

export type AITranslatorInputType = {
    data: {
        to_lang: string,
        from_lang: string,
        input: string,
    }
}

export type AITranslatorOutputType = {
    message: string,
    success: boolean | null,
    result: {
        to_lang: string,
        from_lang: string,
        output: {
            result: string,
            unique_and_rarely: {
                    word: string,
                    translate: string,
                    synonyms: string[]
                }[],
        }
    }
}

export type AITranslatorStateModelType = {
    environments: AssistantEnvironmentsType,
    progress: {
        input: AITranslatorInputType,
        output: AITranslatorOutputType,
    }
}

export type AITranslatorPayloadType = {
    user_id: number | null,
    data: {
        value: AITranslatorInputType
    }
}