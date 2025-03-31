<script lang="ts">
import {$availableRoutes} from "~/configs/routes.config";
import colorUtilities from '~/constants/colorUtilities';

export default defineComponent({
    name: "ForgotPasswordForm",
    setup() {
        const { getBrandName } = useCoreAppStore();
        return {
            getBrandName,
            colorUtilities,
            availableRoutes: $availableRoutes,
            store: useGetstarted(),
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
            return loadingList.includes('forgot_password');
        },
    },
    methods: {
        async submit() {
            this.response = null;
            try {
                this.response = await this.store.sendLinkForResetPassword();
                if(this.response.success) {
                    this.store.reset(this.store.forgotPassword);
                }
            } catch(error) {
                this.response = error
            }
        },
    },
    mounted() {
        useGetstarted().passToForgotPassword();
    },
})
</script>
<template>
    <section id="forgot_password-section">
        <message-box
            v-if="response"
            @action="() => useRouter().push(availableRoutes.login)"
            :label="response.success ? $t('done') : $t('error')"
            :message="$keyValidation({
                error: ['SOMETHING_WENT_WRONG'], 
                warning: ['INVALID_EMAIL'], 
                success: ['PASSWORD_RESET_LINK_WILL_SENT']
            }, response)"/>
        <br/>
        <label for="forgot_password-form" class="flex-row-start-center" style="gap: 15px">
            <nuxt-link :to="availableRoutes.getstarted" class="hover-effect">
                <icon-component icon-name="arrow_back" icon-size="30px"/>
            </nuxt-link>
            <div>
                <Text class="headline" locale="pages.forgot_password.utilities.forgot_password_title"/>
                <Text class="description" locale="pages.forgot_password.utilities.forgot_password_description"/>
            </div>
        </label>
        <br/>
        <br/>
        <form id="forgot_password-form" @submit.prevent="submit">
            <custom-input 
                v-model="store.forgotPassword.email"
                type="email"
                :label="$t('pages.forgot_password.utilities.email_field')" 
                placeholder="example@email.com"
                autocomplete="email"
                icon="alternate_email"
                name="email"
                :disabled="isLoading"
                :maxlength="255"
                :message="$keyValidation({error: ['INVALID_EMAIL']}, response)"
                required/>
            <br/>
            <button 
                type="submit" 
                class="black" 
                :class="{'loading': isLoading}">
                <Text locale="pages.forgot_password.utilities.send_reset_link"/>
            </button>
            <button 
                type="button" 
                class="white" 
                :disabled="isLoading"
                @click="() => useRouter().push(availableRoutes.login)">
                <Text locale="pages.forgot_password.utilities.back_to_login"/>
            </button>
        </form>
    </section>
</template>
<style scoped lang="scss">
#forgot_password-section {
    & > * {
        width: 100%;
    }
    label[for='forgot_password-form'] {
        display: flex;
        align-items: center;
        div {
            display: flex;
            flex-direction: column;
            span.headline {
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