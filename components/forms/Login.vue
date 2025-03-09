<script lang="ts">
import { useAuth } from '~/stores/auth';

export default defineComponent({
    name: "RegisterForm",
    setup() {
        const { getBrandName } = useCoreAppStore();
        const { availableRoutes } = useRouteManagement();
        return {
            getBrandName,
            availableRoutes,
            store: useGetstarted(),
            //@ts-ignore
            $t: useI18nStore().i18n.global.t,
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
            return loadingList.includes('login')
        },
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
                error: ['USER_LOGIN_PROGRESS_FAILED', 'EMAIL_OR_PASSWORD_INCORRECT', 'SOMETHING_WENT_WRONG', 'EMAIL_CONFIRM_REQUIRED'], 
                warning: ['INVALID_EMAIL', 'INVALID_PASSWORD']
            }, response)"/>
        <br/>
        <label for="login-form">
            <h1>{{ $t('greetings', { brand: getBrandName }) }}</h1>
            <span>{{ $t('lets_get_started') }}</span>
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
            <button 
                type="submit" 
                class="black" 
                :class="{'loading': isLoading}"
                :disabled="!store.loginReadyForSubmit">
                {{ $t('pages.login.utilities.login') }}
            </button>
            <button 
                type="button" 
                class="white" 
                :disabled="isLoading"
                @click="() => useRouter().push(availableRoutes.register)">
                {{ $t('pages.login.utilities.create_account') }}
            </button>
        </form>
    </section>
</template>