import type { GetAssistantHistoryByIdParamsType, GetUserAssistantKeysParamsType, StartAssistantParamsType } from "~/types/assistants.types";
import type { ServerResponseType } from "~/types/general.types";
import type { JSONGeneratorPayloadType } from "~/types/json_generator.types";


export const _AIMStart = {
    async get(params: StartAssistantParamsType): Promise<ServerResponseType> {
        return await defineService('start_assistant', () => $get('/aim/start', {params}));
    }
}

export const _AIMUserKeys = {
    async get(params: GetUserAssistantKeysParamsType): Promise<ServerResponseType> {
        return await defineService('user_assistant_keys', () => $get('/aim/user_keys', {params}));
    }
}

export const _AIMJSONGenerator = {
    async post(data: JSONGeneratorPayloadType, cKey: string): Promise<ServerResponseType> {
        return await defineService('json_generator', () => $post(`/aim/json_generator/${cKey}`, {data}));
    }
}

export const _AIMKeyHistory = {
    async get(params: GetAssistantHistoryByIdParamsType) {
        return await defineService('assistant_key_history', () => $get('/aim/key_history', {params}));   
    }
}