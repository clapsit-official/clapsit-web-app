import { useI18nStore } from "~/stores/i18n";

export default defineNuxtPlugin((nuxt) => {
    const { i18n } = useI18nStore();
    nuxt.vueApp.use(i18n);
});