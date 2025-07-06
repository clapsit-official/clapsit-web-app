<script lang="ts">
import { useAuth } from '~/stores/auth';
import {$availableRoutes} from "~/configs/routes.config";
import colors from '~/constants/colorUtilities';

export default defineComponent({
    name: "LoginForm",
    setup() {
        const { getBrandName } = useCoreAppStore();
        return {
            getBrandName,
            availableRoutes: $availableRoutes,
            store: useGetstarted(),
            $t: useI18nStore().i18n.global.t
        }
    },
    data() {
        return {
            response: null as any
        }
    },
    computed: {
        isLoading() {
            const { loadingList } = useQueryManager();
            return loadingList.includes('login');
        },
        colorUtilities(){
            const colorMode = useColorMode().value;
            return colors(colorMode)
        }
    },
    methods: {
        async submit() {
            this.response = null;
            try {
                this.response = await this.store.loginIn();
                if(this.response.success) {
                    useAuth().setAuth(this.response.data);
                    const authResponse = await useAuth().auth();
                    window.location.href = this.availableRoutes.home;
                }
            } catch(error) {
                this.response = error
            }
        },
    },
    mounted() {
        useGetstarted().passToLogin();
    },
})
</script>
<template>
    <section id="login-section">
        <message-box
            v-if="response && !response.success"
            :label="$t('error')"
            :message="$keyValidation({
                error: ['USER_LOGIN_PROGRESS_FAILED', 'EMAIL_OR_PASSWORD_INCORRECT', 'SOMETHING_WENT_WRONG'], 
                warning: ['INVALID_EMAIL', 'INVALID_PASSWORD', 'EMAIL_CONFIRM_REQUIRED']
            }, response)"/>
        <br/>
        <label for="login-form" class="flex-row-start-center" style="gap: 15px">
            <nuxt-link :to="availableRoutes.getstarted" class="hover-effect">
                <icon-component icon-name="arrow_back" icon-size="30px"/>
            </nuxt-link>
            <div>
                <Text class="headline" locale="pages.login.utilities.login_title"/>
                <Text class="description" locale="pages.login.utilities.login_description"/>
            </div>
        </label>
        <br/>
        <br/>
        <form id="login-form" @submit.prevent="submit">
            <custom-input 
                v-model="store.login.email"
                type="email"
                :label="$t('pages.login.utilities.email_field')" 
                placeholder="example@email.com"
                autocomplete="email"
                icon="alternate_email"
                name="email"
                :disabled="isLoading"
                :maxlength="255"
                :message="$keyValidation({error: ['INVALID_EMAIL']}, response)"
                required/>
            <custom-input 
                v-model="store.login.password"
                type="password"
                :label="$t('pages.login.utilities.password_field')" 
                autocomplete="current-password"
                name="newpassword"
                placeholder="••••••••••"
                icon="lock"
                :disabled="isLoading"
                :maxlength="255"
                :message="$keyValidation({error: ['INVALID_PASSWORD']}, response)"
                required/>
            <br/>
            <div class="flex-row-end-center">
                <nuxt-link 
                    :to="availableRoutes.forgot_password"
                    :style="{color: colorUtilities.$textPrimary, fontSize: '0.9rem'}"
                    class="hover-effect">
                    <Text locale="pages.login.utilities.forgot_password"/>
                </nuxt-link>
            </div>
            <br/>
            <button 
                type="submit" 
                class="primary" 
                :class="{'loading': isLoading}">
                <Text locale="pages.login.utilities.login"/>
            </button>
            <button 
                type="button" 
                class="white" 
                :disabled="isLoading"
                @click="() => useRouter().push(availableRoutes.register)">
                <Text locale="pages.login.utilities.create_account"/>
            </button>
        </form>
    </section>
</template>
<style scoped lang="scss">
#login-section {
    & > * {
        width: 100%;
    }
    label[for='login-form'] {
        display: flex;
        align-items: center;
        div {
            display: flex;
            flex-direction: column;
            span.headline {
                color: colors.$textPrimary;
                font-weight: bolder;
                font-size: 1.2rem;
            }
            span.description {
                color: colors.$textSecondary;
                font-size: .9rem;
            }
        }
    }
}
</style>