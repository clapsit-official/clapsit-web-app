import type { GetUserAssistantKeysParamsType, StartAssistantParamsType } from "~/types/assistants.types";
import type { ServerResponseType } from "~/types/general.types";


export const _StartAssistant = {
    async get(params: StartAssistantParamsType): Promise<ServerResponseType> {
        return await defineService('start_assistant', () => $query('GET', '/aim/start', {params}))
    }
}

export const _UserAssistantKeys = {
    async get(params: GetUserAssistantKeysParamsType): Promise<ServerResponseType> {
        return await defineService('user_assistant_keys', () => $query('GET', '/aim/user_keys', {params}))
    }
}