//@ts-nocheck
import type { InputMessageType } from "~/constants/types/InputComponentTypes";
import type { BackendMessageKeys } from "~/constants/types/LocalesType";
import type { ServerResponseType } from "~/types/general.types";

export function $keyValidation(validations: {
    error?: BackendMessageKeys[],
    warning?: BackendMessageKeys[],
    info?: BackendMessageKeys[],
    success?: BackendMessageKeys[],
}, response: ServerResponseType): InputMessageType {
    if (response && response.message) {
        const result: InputMessageType[] = [];
        Object.entries(validations).forEach(([key, value]) => {
            if (value.includes(response.message.key)) {
                result.push({
                    type: key,
                    text: response.message?.text || response.message?.key
                })
            }
        });
        return (result[0]);
    }
    return null;
}