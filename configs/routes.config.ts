import type { RouteConfigsType } from "~/types/route_config.types";

export const routeConfigs: RouteConfigsType = {
    default: {
        key: 'default',
        layout: null,
    },
    '/': {
        key: 'home',
        layout: 'auth',
    },
    '/getstarted': {
        key: 'getstarted',
        layout: 'auth'
    }
}