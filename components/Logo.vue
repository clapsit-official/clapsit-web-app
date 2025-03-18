<template>
    <div class="logo">
        <section id="logo-area" class="flex-row-center">
            <nuxt-link :to="availableRoutes.home" class="animation" :class="{'bounce': isLoading}">
                <img :src="logo" alt="Logo" :srcset="logo" :width="size">
            </nuxt-link>
        </section>
    </div>
</template>
<script lang="ts">
import logo from '~/assets/images/logo1.svg';
import { $availableRoutes } from '~/configs/routes.config';

export default {
    name: "LogoComponent",
    setup() {
        const { getBrandName } = useCoreAppStore();
        return {
            logo,
            getBrandName,
            availableRoutes: $availableRoutes,
            $t: useI18nStore().i18n.global.t,
        }
    },
    props: {
      size: {
        type: String,
        default: '250'
      }  
    },
    computed: {
        isLoading() {
            const { loadingList } = useQueryManager();
            return loadingList.length > 0;
        }
    }
};
</script>