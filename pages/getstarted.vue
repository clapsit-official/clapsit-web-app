<template>
    <div id="get-started-page">
        <section id="logo-area" class="flex-row-center" v-if="!showLogoForMobile">
            <logo size="500"/>
        </section>
        <section id="form-area" class="flex-row-center">
            <div id="login" class="static-container" v-if="$router.currentRoute.value.query['view'] === 'login'">
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <logo size="70%" type="2"/>
                </div>
                <forms-login/>
            </div>

            <div id="register" class="static-container" v-else-if="$router.currentRoute.value.query['view'] === 'register'">
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <logo size="70%" type="2"/>
                </div>
                <forms-register/>
            </div>

            <div id="forgot-password" class="static-container" v-else-if="$router.currentRoute.value.query['view'] === 'forgot_password'">
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <logo size="70%" type="2"/>
                </div>
                <forms-forgot-password/>
            </div>


            <div id="getstarted" class="static-container" v-else>
                <div id="logo-area-mobile" class="flex-row-center" v-if="showLogoForMobile">
                    <logo size="70%" type="2"/>
                </div>
                <br/>
                <label>
                    <h1><Text locale="greetings"/></h1>
                    <Text locale="lets_get_started"/>
                </label>
                <signup-with-button platform="apple" />
                <signup-with-button platform="google" />
                <signup-with-button platform="facebook" />
                <div class="flex-row-center" style="gap: 1rem; margin-top: 2rem;">
                    <span class="divider"></span>
                    <Text locale="or"/>
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
import logo from '~/assets/images/logo1.svg';
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
#get-started-page {
    background-color: colors.$backgroundColor;
    #logo-area {
        background-color: colors.$surfaceColor;
    }
}

.desktop-app-container > #get-started-page {
    width: 100vw;
    display: flex;
    &>section {
        width: 50%;
        height: 100vh;
    }

    section#logo-area { 
        @include colors.box-shadow-1;
        img {
            width: 500px;
        }
    }
    section#form-area {
        @include colors.box-shadow-4;
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
.tablet-app-container > #get-started-page {
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
.mobile-app-container > #get-started-page {
    width: 100vw;
    height: 70dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #logo-area-mobile {
        margin: 3rem 0;
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