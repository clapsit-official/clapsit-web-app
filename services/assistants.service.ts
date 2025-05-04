import type { GetAssistantHistoryByIdParamsType, GetUserAssistantKeysParamsType, StartAssistantParamsType } from "~/types/assistants.types";
import type { ServerResponseType } from "~/types/general.types";
import type { JSONGeneratorPayloadType } from "~/types/json_generator.types";
import type { AITranslatorPayloadType } from "~/types/ai_translator.types";


export const _AIMStart = {
    async get(params: StartAssistantParamsType): Promise<ServerResponseType> {
        return await defineService('start_assistant', () => $get('/aim/start', {params}));
    }
}

export const _AIMUserKeys = {
    async get(params: GetUserAssistantKeysParamsType): Promise<ServerResponseType> {
        return await defineService('user_assistant_keys', () => $get('/aim/user_keys', {params}));
    },
    async patch(key_id: number, data: {save: boolean, user_id: number | null}): Promise<ServerResponseType> {
        return await defineService('patch_user_assistant_keys', () => $patch(`/aim/user_keys/${key_id}`, {data}));
    },
    async delete(key_id: number | null, params: {user_id: number | null}): Promise<ServerResponseType> {
        return await defineService('delete_user_assistant_keys', () => $delete(`/aim/user_keys/${key_id || ''}`, {params}));
    }
}

export const _AIMKeyHistory = {
    async get(params: GetAssistantHistoryByIdParamsType, filter? : 'recently' | 'saved') {
        switch(filter) {
            case 'recently':
                return await defineService('assistant_key_history', () => $get('/aim/key_history/recently', {params}));   
            case 'saved':
                return await defineService('assistant_key_history', () => $get('/aim/key_history/saved', {params}));   
            default:
                return await defineService('assistant_key_history', () => $get('/aim/key_history', {params}));   
        }
    },
    async patch(conversation_id: number, data: {save: boolean, user_id: number | null}): Promise<ServerResponseType> {
        return await defineService('patch_assistant_key_history', () => $patch(`/aim/key_history/${conversation_id}`, {data}));
    },
    async delete(conversation_id: number, params: {user_id: number | null}): Promise<ServerResponseType> {
        return await defineService('delete_assistant_key_history', () => $delete(`/aim/key_history/${conversation_id}`, {params}));
    }
}


export const _AIMJSONGenerator = {
    async get(c_id: number): Promise<ServerResponseType> {
        return await defineService('json_generator_by_id', () => $get(`/aim/json_generator/${c_id}`));
    },
    async post(data: JSONGeneratorPayloadType, cKey: string): Promise<ServerResponseType> {
        return await defineService('json_generator', () => $post(`/aim/json_generator/${cKey}`, {data}));
    }
}

export const _AIMAITranslator = {
    async post(data: AITranslatorPayloadType, cKey: string): Promise<ServerResponseType> {
        return await defineService('ai_translator', () => $post(`/aim/ai_translator/${cKey}`, {data}));
    }
}