<template>
    <div id="get-started-page">
        <section id="logo-area" class="flex-row-center" v-if="!showLogoForMobile">
            <nuxt-link :to="availableRoutes.home" class="animation" :class="{'bounce': isLoading}">
                <img :src="logo" alt="Logo" :srcset="logo">
            </nuxt-link>
        </section>
        <section id="form-area" class="flex-row-center">
            <div id="login" class="static-container" v-if="$router.currentRoute.value.query['view'] === 'login'">
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <nuxt-link :to="availableRoutes.home" class="animation" :class="{'bounce': isLoading}">
                        <img :src="logo" alt="Logo" :srcset="logoMobile">
                    </nuxt-link>
                </div>
                <forms-login/>
            </div>

            <div id="register" class="static-container" v-else-if="$router.currentRoute.value.query['view'] === 'register'">
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <nuxt-link :to="availableRoutes.home">
                        <img :src="logo" alt="Logo" :srcset="logoMobile">
                    </nuxt-link>
                </div>
                <forms-register/>
            </div>

            <div id="forgot-password" class="static-container" v-else-if="$router.currentRoute.value.query['view'] === 'forgot_password'">
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <nuxt-link :to="availableRoutes.home" class="animation" :class="{'bounce': isLoading}">
                        <img :src="logo" alt="Logo" :srcset="logoMobile">
                    </nuxt-link>
                </div>
                <forms-forgot-password/>
            </div>


            <div id="getstarted" class="static-container" v-else>
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <nuxt-link :to="availableRoutes.home">
                        <img :src="logo" alt="Logo" :srcset="logoMobile">
                    </nuxt-link>
                </div>
                <br/>
                <label>
                    <h1>{{ $t('greetings', { brand: useCoreAppStore().getBrandName }) }}</h1>
                    <span>{{ $t('lets_get_started') }}</span>
                </label>
                <signup-with-button platform="apple" />
                <signup-with-button platform="google" />
                <signup-with-button platform="facebook" />
                <div class="flex-row-center" style="gap: 1rem; margin-top: 2rem;">
                    <span class="divider"></span>
                    <span style="font-size: 1rem;"> {{ $t('or') }}</span>
                    <span class="divider"></span>
                </div>
                <default-button
                    kind="main"
                    :label="$t('pages.getstarted.utilities.create_account')"
                    @click="() => useRouter().push(availableRoutes.register)"/>
                <default-button
                    kind="secondary"
                    :label="$t('pages.getstarted.utilities.login')"
                    @click="() => useRouter().push(availableRoutes.login)"/>
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
import {$availableRoutes} from "~/configs/routes.config";

export default {
    name: "GetStartedPage",
    components: { SignupWithButton, DefaultButton },
    setup() {
        const { getBrandName } = useCoreAppStore();
        return {
            store: useGetstarted(),
            logo,
            logoMobile,
            getBrandName,
            availableRoutes: $availableRoutes,
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
            return loadingList.includes('register') || loadingList.includes('login')
        }
    }
};
</script>
<style lang="scss" scoped>
div#get-started-page.desktop-app-container {
    width: 100vw;
    display: flex;
    &>section {
        width: 50%;
        height: 100vh;
    }

    section#logo-area { 
        img {
            width: 400px;
        }
    }
    section#form-area {
        div.static-container>* {
            width: 20rem;
        }

        div.static-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 20rem;
            gap: .5rem;
        }
    }
}
div#get-started-page.tablet-app-container {
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #logo-area-mobile {
        margin: 3rem 0;
        img {
            width: 30vw;
        }

    }
    section#form-area {
        div.static-container {
            display: flex;
            flex-direction: column;
            gap: 1rem !important
        }
        div.static-container> * {
            width: 23rem;
            gap: 1rem;
        }
    }
}
div#get-started-page.mobile-app-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0 15rem 0;
    #logo-area-mobile {
        img {
            width: 50vw;
        }

    }
    section#form-area {
        div.static-container {
            display: flex;
            flex-direction: column;
            gap: 1rem !important
        }
        div.static-container > * {
            width: 70vw;
        }
    }
}
</style>