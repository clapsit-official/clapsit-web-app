<script lang="ts">
import { $availableRoutes } from "~/configs/routes.config";

export default defineComponent({
    name: "RegisterForm",
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
            return loadingList.includes('register');
        }
    },
    methods: {
        async submit() {
            this.response = null;
            try {
                this.response = await this.store.createAccount();
                if (this.response.success) {
                    useRouter().push(this.availableRoutes.login);
                }
            } catch (error) {
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
        <message-box v-if="response && !response.success" :label="$t('error')" :message="$keyValidation({
            error: ['USER_REGISTRATION_FAILED', 'SOMETHING_WENT_WRONG'],
            warning: ['EMAIL_IS_EXIST', 'INVALID_FULLNAME', 'INVALID_PASSWORD']
        },
            response)" />
        <br />
        <label for="register-form" class="flex-row-start-center" style="gap: 15px">
            <nuxt-link :to="availableRoutes.getstarted" class="hover-effect">
                <icon-component icon-name="arrow_back" icon-size="30px"/>
            </nuxt-link>
            <div>
                <Text class="headline" locale="pages.register.utilities.register_title"/>
                <Text class="description" locale="pages.register.utilities.register_description"/>
            </div>
        </label>
        <br />
        <br />
        <form id="register-form" @submit.prevent="submit">
            <custom-input v-model="store.register.fullname" type="text"
                :label="$t('pages.register.utilities.fullname_field')" icon="person" placeholder="John Doe"
                autocomplete="name" name="fullname" :maxlength="255" :disabled="isLoading"
                :message="$keyValidation({ error: ['INVALID_FULLNAME'] }, response)" required />
            <custom-input v-model="store.register.email" type="email"
                :label="$t('pages.register.utilities.email_field')" placeholder="example@email.com" autocomplete="email"
                icon="alternate_email" name="email" :maxlength="255" :disabled="isLoading"
                :message="$keyValidation({ error: ['EMAIL_IS_EXIST'], warning: ['INVALID_EMAIL'] }, response)" required />
            <custom-input v-model="store.register.password" type="password"
                :label="$t('pages.register.utilities.password_field')" autocomplete="new-password" name="newpassword"
                placeholder="••••••••••" icon="lock" :maxlength="255" :disabled="isLoading"
                :message="$keyValidation({ error: ['INVALID_PASSWORD'] }, response)" required />
            <br />
            <custom-checkbox :disabled="isLoading" name="acceptTerms" required v-model="store.register.acceptTerms">
                <Text locale="pages.register.utilities.i_accepted_the"/>
                <nuxt-link 
                    target="_blank"
                    :to="availableRoutes.terms_of_service">
                    <Text locale="pages.register.utilities.terms_of_service"/>
                </nuxt-link>
                <Text locale="and"/>
                <nuxt-link 
                    target="_blank"
                    :to="availableRoutes.privacy_policy">
                   <Text locale="pages.register.utilities.privacy_policy"/>
                </nuxt-link>    
            </custom-checkbox>
            <br>
            <button type="submit" class="primary" :class="{ 'loading': isLoading }">
                <Text locale="pages.register.utilities.create_account"/>
            </button>
            <button type="button" class="white" :disabled="isLoading"
                @click="() => useRouter().push(availableRoutes.login)">
                <Text locale="pages.register.utilities.already_have_account"/>
            </button>
        </form>
    </section>
</template>
<style scoped lang="scss">
#register-section {
    & > * {
        width: 100%;
    }
    label[for='register-form'] {
        display: flex;
        align-items: center;
        div {
            display: flex;
            flex-direction: column;
            span.headline {
                font-weight: bolder;
                font-size: 1.2rem;
                color: colors.$textPrimary;
            }
            span.description {
                color: colors.$textSecondary;
                font-size: .9rem;
            }
        }
    }
}
</style>