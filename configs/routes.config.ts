import type { RouteConfigsType } from "~/types/route_config.types";

export const routeConfigs: RouteConfigsType = {
    default: {
        key: 'default',
        layout: null,
    },
    '/': {
        key: 'home',
        layout: 'unauth',
    },
    '/getstarted': {
        key: 'getstarted',
        layout: 'unauth'
    },
    '/getstarted?view=login': {
        key: 'login',
        layout: 'unauth'
    },
    '/getstarted?view=register': {
        key: 'register',
        layout: 'unauth'
    },
}