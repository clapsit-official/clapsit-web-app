import type {RouteConfigsType} from "~/types/route_config.types";

export const routeConfigs: RouteConfigsType = {
    default: {
        key: 'default',
        layout: null,
    },
}

export const $availableRoutes = {
    home: "/",
    getstarted: "/getstarted",
    login: "/getstarted?view=login",
    register: "/getstarted?view=register",
    user_account: "/account/user"
}

routeConfigs[$availableRoutes.home] = {
    key: 'home',
    layout: 'unauth',
}

routeConfigs[$availableRoutes.getstarted] = {
    key: 'getstarted',
    layout: 'unauth',
    middleware: async () => {
        if (useAuth().checkAuthCredentials()) {
            await useRouter().push($availableRoutes.user_account);
        }
    }
}
routeConfigs[$availableRoutes.login] = {
    key: 'login',
    layout: 'unauth',
    middleware: async () => {
        if (useAuth().checkAuthCredentials()) {
            await useRouter().push($availableRoutes.user_account);
        }
    }
}

routeConfigs[$availableRoutes.register] = {
    key: 'register',
    layout: 'unauth',
    middleware: async () => {
        if (useAuth().checkAuthCredentials()) {
            await useRouter().push($availableRoutes.user_account);
        }
    }
}

routeConfigs[$availableRoutes.user_account] = {
    key: 'userAccount',
    layout: null,
    auth_required: true
}