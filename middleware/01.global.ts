import { useRouteManagement } from "~/stores/routeManagement"

export default defineNuxtRouteMiddleware((from, to)=> {
    useRouteManagement().setRoutes(to, from);
    return
})