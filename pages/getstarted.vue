<template>
    <div id="get-started-page" class="flex-row-center">
        <section id="logo-area" class="flex-row-center" v-if="!showLogoForMobile">
            <nuxt-link :to="availableRoutes.home" class="animation" :class="{'bounce': isLoading}">
                <img :src="logo" alt="Logo" :srcset="logo">
            </nuxt-link>
        </section>
        <section id="form-area" class="flex-row-center">
            <div id="login" class="static-container" v-if="$router.currentRoute.value.query['view'] === 'login'">
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <nuxt-link :to="availableRoutes.home" class="animation" :class="{'bounce': isLoading}">
                        <img :src="logo" alt="Logo" :srcset="logoMobile" style="width: 18rem;">
                    </nuxt-link>
                </div>
                <forms-login/>
            </div>

            <div id="register" class="static-container" v-else-if="$router.currentRoute.value.query['view'] === 'register'">
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <nuxt-link :to="availableRoutes.home">
                        <img :src="logo" alt="Logo" :srcset="logoMobile" style="width: 18rem;">
                    </nuxt-link>
                </div>
                <forms-register/>
            </div>

            <div id="getstarted" class="static-container" v-else>
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <nuxt-link :to="availableRoutes.home">
                        <img :src="logo" alt="Logo" :srcset="logoMobile" style="width: 18rem;">
                    </nuxt-link>
                </div>
                <label>
                    <h1>{{ $t('greetings', { brand: useCoreAppStore().getBrandName }) }}</h1>
                    <span>{{ $t('lets_get_started') }}</span>
                </label>
                <signup-with-button platform="apple" />
                <signup-with-button platform="google" />
                <signup-with-button platform="facebook" />
                <div class="flex-row-center" style="gap: 1rem;">
                    <span class="divider"></span>
                    <span style="font-size: 1rem;"> {{ $t('or') }}</span>
                    <span class="divider"></span>
                </div>
                <default-button kind="main" label="Create Account" @click="() => useRouter().push(availableRoutes.register)"/>
            </div>
        </section>
    </div>
</template>
<script lang="ts">
import logo from '~/assets/images/logo2.svg';
import logoMobile from '~/assets/images/logo1.svg';
import SignupWithButton from '~/components/SignupWithButton.vue';
import DefaultButton from '~/components/DefaultButton.vue';
import { useGetstarted } from '~/stores/getstarted';

export default {
    name: "GetStartedPage",
    components: { SignupWithButton, DefaultButton },
    setup() {
        const { getBrandName } = useCoreAppStore();
        const { availableRoutes } = useRouteManagement();
        return {
            store: useGetstarted(),
            logo,
            logoMobile,
            getBrandName,
            availableRoutes,
            //@ts-ignore
            $t: useI18nStore().i18n.global.t,
        }
    },
    computed: {
        showLogoForMobile() {
            const { getDeviceType } = useCoreAppStore();
            return getDeviceType !== 'desktop';
        },
        isLoading() {
            const { loadingList } = useQueryManager();
            return loadingList.includes('register')
        }
    }
};
</script>
<style lang="scss" scoped>
div#get-started-page {
    width: 100vw;
    &>section {
        width: 50%;
        height: 100vh;
    }

    section#logo-area, #logo-area-mobile {
        img {
            width: 400px;
        }
    }

    #logo-area-mobile {
        margin: 3rem 0;
    }

    section#form-area {
        div.static-container>* {
            width: 100%;
        }

        div.static-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 20rem;
            gap: .5rem;
        }
    }
}
</style>