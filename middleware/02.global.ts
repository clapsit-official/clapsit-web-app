import { useRouteManagement } from "~/stores/routeManagement"
import {availableRoutes} from "~/configs/routes.config";

export default defineNuxtRouteMiddleware(async (from, to) => {
    if (process.client) {
        const {middleware, auth_required} = useRouteManagement().config;
        if(auth_required) {
            try {
                if(!useAuth().checkAuthCredentials()){
                    return await useRouter().push(availableRoutes.getstarted);
                }
            } catch(error: any) {
                console.error(error);
            }
        }
        if(useAuth().checkAuthCredentials() && !useAuth().isAuth){
            try {
                await useAuth().auth();
            } catch(error: any) {
                console.error(error);
            }
        }
        if (middleware) {
            await middleware(from, to);
        }
    }
    return
})