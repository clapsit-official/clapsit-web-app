export type RouteConfigItemType = {
    key: string | null;
    layout: string | null;
}

export type RouteConfigsType = {
    [key: string] : RouteConfigItemType;
}