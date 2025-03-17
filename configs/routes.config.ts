import type {RouteConfigsType} from "~/types/route_config.types";

export const $availableRoutes = {
    home: "/",
    getstarted: "/getstarted",
    login: "/getstarted?view=login",
    register: "/getstarted?view=register",
    user_account: "/account/user",
    confirm_email: "/confirm_email",
    terms_of_service: '/terms_of_service',
    privacy_policy: '/privacy_policy',
    forgot_password: '/getstarted?view=forgot_password',
    reset_password: '/reset_password',
}

export const routeConfigs: RouteConfigsType = {
    default: {
        key: null,
        layout: null,
    },
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

routeConfigs[$availableRoutes.confirm_email] = {
    key: null,
    layout: null,
    middleware: async () => {
        if (useAuth().checkAuthCredentials()) {
            await useRouter().push($availableRoutes.user_account);
        }
    }
}