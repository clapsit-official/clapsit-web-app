<script lang="ts">
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
            return loadingList.includes('register')
        }
    },
    methods: {
        async submit() {
            this.response = null;
            try {
                this.response = await this.store.createAccount();
                if(this.response.success) {
                    useRouter().push(this.availableRoutes.login);
                }
            } catch(error) {
                this.response = error
            }
        },
    },
    mounted() {
        useGetstarted().passToRegister()
    }
})
</script>
<template>
    <section id="register-section" :key="response?.toString()">
        <message-box
            v-if="response && !response.success"
            :label="$t('error')"
            :message="$keyValidation({
                success: ['USER_SUCCESSFULLY_REGISTERED'],
                error: ['USER_REGISTRATION_FAILED', 'SOMETHING_WENT_WRONG'], 
                warning: ['EMAIL_IS_EXIST', 'INVALID_FULLNAME', 'INVALID_PASSWORD']}, 
                response)"/>
        <br/>
        <label for="register-form">
            <h1>{{ $t('greetings', { brand: getBrandName }) }}</h1>
            <span>{{ $t('lets_get_started') }}</span>
        </label>
        <br/>
        <br/>
        <form id="register-form" @submit.prevent="submit">
            <custom-input 
                v-model="store.register.fullname"
                type="text"
                :label="$t('pages.register.utilities.fullname_field')" 
                icon="person"
                placeholder="John Doe"
                autocomplete="name"
                name="fullname"
                :maxlength="255"
                :disabled="isLoading"
                :message="$keyValidation({error: ['INVALID_FULLNAME']}, response)"
                required/>
            <custom-input 
                v-model="store.register.email"
                type="email"
                :label="$t('pages.register.utilities.email_field')" 
                placeholder="example@email.com"
                autocomplete="email"
                icon="alternate_email"
                name="email"
                :maxlength="255"
                :disabled="isLoading"
                :message="$keyValidation({error: ['EMAIL_IS_EXIST'], warning: ['INVALID_EMAIL']}, response)"
                required/>
            <custom-input 
                v-model="store.register.password"
                type="password"
                :label="$t('pages.register.utilities.password_field')" 
                autocomplete="new-password"
                name="newpassword"
                placeholder="••••••••••"
                icon="lock"
                :maxlength="255"
                :disabled="isLoading"
                :message="$keyValidation({error: ['INVALID_PASSWORD']}, response)"
                required/>
            <br/>
            <button
                type="submit"
                class="black"
                :class="{'loading': isLoading}"
                :disabled="!store.registerReadyForSubmit">
                {{ $t('pages.register.utilities.create_account') }}
            </button>
            <button 
                type="button" 
                class="white"
                :disabled="isLoading"
                @click="() => useRouter().push(availableRoutes.login)">
                {{ $t('pages.register.utilities.already_have_account') }}
            </button>
        </form>
    </section>
</template>