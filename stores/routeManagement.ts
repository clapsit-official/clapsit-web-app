import type { RouteLocationNormalizedGeneric } from "vue-router";
import { routeConfigs } from "~/configs/routes.config";

export const useRouteManagement = defineStore('routeManagement', {
   state: () => ({
    to: null as RouteLocationNormalizedGeneric | null,
    from: null as RouteLocationNormalizedGeneric | null
   }),
   getters: {
    config(state){
        if(state.to){
            return routeConfigs[state.to.path];
        } 
        return routeConfigs.default;
    }
   },
   actions: {
    setRoutes(from: RouteLocationNormalizedGeneric, to: RouteLocationNormalizedGeneric){
        this.from = JSON.parse(JSON.stringify(from));
        this.to = JSON.parse(JSON.stringify(to));
        
        // @ts-ignore
        const {t} = useI18nStore().i18n.global;
        useSeoMeta({
            title: t(`pages.${this.config.key}.title`) + ` | ${useCoreAppStore().getBrandName}`,
            description: t(`pages.${this.config.key}.description`, {brand: useCoreAppStore().getBrandName}),
            keywords: t(`pages.${this.config.key}.keywords`),
            ogTitle: t(`pages.${this.config.key}.title`) + ` | ${useCoreAppStore().getBrandName}`,
            ogDescription: t(`pages.${this.config.key}.description`, {brand: useCoreAppStore().getBrandName}),
            ogImage: useCoreAppStore().getPublicLogo,
            ogUrl: `${useCoreAppStore().getBrandDomain}${useRoute().fullPath}`,
        })
    }
   }
});
