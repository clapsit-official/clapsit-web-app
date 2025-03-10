export type RouteConfigItemType = {
    key: string;
    layout: string | null;
    auth_required?: boolean;
    middleware?: () => void;
}

export type RouteConfigsType = {
    [key: string] : RouteConfigItemType;
}