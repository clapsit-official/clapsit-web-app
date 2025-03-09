import { useRouteManagement } from "~/stores/routeManagement"

export default defineNuxtRouteMiddleware(async (from, to)=> {
    useRouteManagement().setRoutes(to, from);
    if(process.client) {
        await useCoreAppStore().checkHealth();
    }
    return
})