import type { RouteConfigsType } from "~/types/route_config.types";

export const routeConfigs: RouteConfigsType = {
    default: {
        key: 'default',
        layout: null,
    },
    '/': {
        key: 'home',
        layout: 'unauth',
        auth_required: true
    },
    '/getstarted': {
        key: 'getstarted',
        layout: 'unauth',
        middleware: () => {
            if(useAuth().checkAuthCredentials()){
                useRouter().push('/');
            }
        }
    },
    '/getstarted?view=login': {
        key: 'login',
        layout: 'unauth',
        middleware: () => {
            if(useAuth().checkAuthCredentials()){
                useRouter().push('/');
            }
        }
    },
    '/getstarted?view=register': {
        key: 'register',
        layout: 'unauth',
        middleware: () => {
            if(useAuth().checkAuthCredentials()){
                useRouter().push('/');
            }
        }
    },
}