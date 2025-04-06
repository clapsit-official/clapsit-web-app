import type { AssistantEnvironmentsType } from "./assistants.types"

export type JSONGeneratorInputType = {
    message: string,
    result: string,
}

export type JSONGeneratorOutputType = {
    message: string,
    result: string,
    success: boolean | null,
}

export type JSONGeneratorStateModelType = {
    environments: AssistantEnvironmentsType,
    progress: {
        input: JSONGeneratorInputType,
        output: JSONGeneratorOutputType,
    }
}

export type JSONGeneratorPayloadType = {
    user_id: number | null,
    data: {
        value: {
            message: string,
            result: object,
            success?: boolean | null,
        }
    }
}