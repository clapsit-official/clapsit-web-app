export type RouteConfigItemType = {
    key: string;
    layout: string | null;
}

export type RouteConfigsType = {
    [key: string] : RouteConfigItemType;
}