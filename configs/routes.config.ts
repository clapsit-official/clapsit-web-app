import type {RouteConfigsType} from "~/types/route_config.types";

export const availableRoutes = {
    home: "/",
    getstarted: "/getstarted",
    login: "/getstarted?view=login",
    register: "/getstarted?view=register",
    confirm_email: "/confirm_email",
    terms_of_service: '/terms_of_service',
    privacy_policy: '/privacy_policy',
    forgot_password: '/getstarted?view=forgot_password',
    reset_password: '/reset_password',
    assistant: '/assistant',
    json_generator: '/assistant/json_generator',
}

export const routeConfigs: RouteConfigsType = {
    default: {
        key: null,
        layout: null,
    },
}

routeConfigs[availableRoutes.home] = {
    key: 'home',
    layout: 'default',
    auth_required: true,
    middleware: async () => {
        if (useAuth().checkAuthCredentials()) {
            routeConfigs[availableRoutes.home].layout = 'main';
            setPageLayout('main');
            await useAssistant().updateUserAssistantKeys();
            await useAssistant().getRecentlyKeyHistories();
            await useAssistant().getSavedKeyHistories();
        }
    }
}

routeConfigs[availableRoutes.getstarted] = {
    key: 'getstarted',
    layout: 'default',
    middleware: async () => {
        if (useAuth().checkAuthCredentials()) {
            await useRouter().push(availableRoutes.home);
        }
    }
}
routeConfigs[availableRoutes.login] = {
    key: 'login',
    layout: 'default',
    middleware: async () => {
        if (useAuth().checkAuthCredentials()) {
            await useRouter().push(availableRoutes.home);
        }
    }
}

routeConfigs[availableRoutes.register] = {
    key: 'register',
    layout: 'default',
    middleware: async () => {
        if (useAuth().checkAuthCredentials()) {
            await useRouter().push(availableRoutes.home);
        }
    }
}

routeConfigs[availableRoutes.confirm_email] = {
    key: null,
    layout: null,
    middleware: async () => {
        if (useAuth().checkAuthCredentials()) {
            await useRouter().push(availableRoutes.home);
        }
    }
}

routeConfigs[availableRoutes.assistant] = {
    key: 'assistant',
    layout: 'main',
    auth_required: true,
    async middleware() {
        await useRouter().push(availableRoutes.home);
    }
}

routeConfigs[availableRoutes.json_generator] = {
    key: 'json_generator',
    layout: 'main',
    auth_required: true,
    async middleware(to, from) {
        await updateAssistantHistory(to, from);
    }
}

async function updateAssistantHistory(to: any, from: any) {
    await useAssistant().updateUserAssistantKeys();
    const target = useAssistant().getUserAssistantKeys.find(item => item.c_key === to.query.c_key);
    
    if(target) {
        await useAssistant().updateAssistantKeyHistoryById(target.id);        
    } else {
        //window.location.href = ('/404');
    }
}