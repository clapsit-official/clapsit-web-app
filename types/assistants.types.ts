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
    conversation_key: string | null
}

export type UserAssistantKeyItem = {
    id: number,
    c_key: string,
    date: Date,
    key_name: AvailableAssistants,
    label?: string,
}