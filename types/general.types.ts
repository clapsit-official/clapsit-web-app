import type { BackendMessageKeys } from "~/constants/types/LocalesType";

export type ServerResponseType = {
    service?: string;
    success: boolean;
    message: { key: BackendMessageKeys, text: string } | null;
    status: number;
    data: object | null;
}

export type QueryMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type DeviceTypes = 'desktop' | 'tablet' | 'mobile' | null