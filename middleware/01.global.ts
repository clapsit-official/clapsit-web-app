import { useRouteManagement } from "~/stores/routeManagement"

export default defineNuxtRouteMiddleware(async (from, to)=> {
    useRouteManagement().setRoutes(to, from);
    if(process.client) {
        if(useCoreAppStore().health === null) {
            await useCoreAppStore().checkHealth();
        }
    }
    return
})