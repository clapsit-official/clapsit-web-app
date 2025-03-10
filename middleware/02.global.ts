import { useRouteManagement } from "~/stores/routeManagement"

export default defineNuxtRouteMiddleware(async (from, to) => {
    if (process.client) {
        const middleware = useRouteManagement().config.middleware;
        const auth_required = useRouteManagement().config.auth_required;
        if (middleware) {
            middleware();
        }
        if(auth_required) {
            try {
                await useAuth().auth();
            } catch(error: any) {
                console.error(error);
            }
        }
    }
    return
})