import type { JSONGeneratorInputType, JSONGeneratorOutputType } from "./json_generator.types";

export type AvailableAssistants = 'json_generator';
export type StartAssistantParamsType = {
    user_id: number | null,
    key_name: AvailableAssistants | null
};
export type GetUserAssistantKeysParamsType = {
    user_id: number | null,
};
export type AssistantEnvironmentsType = {
    key_name: AvailableAssistants,
    c_key: string | null,
    c_id: number | null
}

export type UserAssistantKeyItem = {
    id: number,
    c_key: string,
    date: Date,
    key_name: AvailableAssistants,
    label?: string,
}

export type GetAssistantHistoryByIdParamsType = {
    user_id: number | null,
    key_id: number | null
}

export type UserAssistantHistoryItem = {
    c_id: number,
    c_key: string,
    input: JSONGeneratorInputType,
    output: JSONGeneratorOutputType,
    date: Date
}