import type {RouteLocationNormalizedGeneric} from "#vue-router";

export type RouteConfigItemType = {
    key: string | null;
    layout: string | null;
    auth_required?: boolean;
    middleware?: (from?: RouteLocationNormalizedGeneric, to?: RouteLocationNormalizedGeneric) => void;
}

export type RouteConfigsType = {
    [key: string] : RouteConfigItemType;
}