import { useRouteManagement } from "~/stores/routeManagement"
import {$availableRoutes} from "~/configs/routes.config";

export default defineNuxtRouteMiddleware(async (from, to) => {
    if (process.client) {
        const middleware = useRouteManagement().config.middleware;
        const auth_required = useRouteManagement().config.auth_required;
        if (middleware) {
            await middleware(from, to);
        }
        if(auth_required) {
            try {
                if(!useAuth().checkAuthCredentials()){
                    return await useRouter().push($availableRoutes.getstarted);
                } else {
                    await useAuth().auth();
                }
            } catch(error: any) {
                console.error(error);
            }
        }
    }
    return
})