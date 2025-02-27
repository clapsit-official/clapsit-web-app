<template>
    <div id="get-started-page" class="flex-row-center">
        <section id="logo-area" class="flex-row-center">
            <nuxt-link to="/">
                <img :src="logo" alt="Logo" :srcset="logo">
            </nuxt-link>
        </section>
        <section id="form-area" class="flex-row-center">
            <div id="static-container">
                <label>
                    <h1>{{ $t('greetings', {brand: useCoreAppStore().getBrandName}) }}</h1>
                    <span>{{ $t('lets_get_started') }}</span>
                </label>
                <signup-with-button platform="apple"/>
                <signup-with-button platform="google"/>
                <signup-with-button platform="facebook"/>
                <div class="flex-row-center" style="gap: 1rem;">
                    <span class="divider"></span>
                    <span style="font-size: 1rem;"> {{ $t('or') }}</span>
                    <span class="divider"></span>
                </div>
                <default-button kind="main" label="Create Account"/>
            </div>
        </section>
    </div>
</template>
<script lang="ts">
import logo from '~/assets/images/logo2.svg';
import SignupWithButton from '~/components/SignupWithButton.vue';
import DefaultButton from '~/components/DefaultButton.vue';

export default {
    name: "GetStartedPage",
    components: {SignupWithButton, DefaultButton},
    setup() {
        const {getBrandName} = useCoreAppStore();
        return {
            logo,
            getBrandName,
            //@ts-ignore
            $t: useI18nStore().i18n.global.t
        }
    }
};
</script>
<style lang="scss" scoped>
div#get-started-page {
    width: 100vw;
    height: 100vh;

    &>section {
        width: 50%;
        height: 100vh;
    }

    section#logo-area {
        img { width: 600px; }
    }

    section#form-area {
        div#static-container > * {
            width: 100%;
        }
        div#static-container{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 20rem;
            gap: .5rem;
            h1{
                font-weight: 900;
            }
            span {
                color: colors.$textSecondary;
                font-size: 1.2rem;
            }
            label {
                text-align: center;
                margin-bottom: 2rem;
            }
        }
    }
}
</style>