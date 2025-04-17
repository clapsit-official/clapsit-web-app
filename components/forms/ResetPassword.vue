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
            store: useUser(),
            $t: useI18nStore().i18n.global.t
        }
    },
    data() {
        return {
            response: null as any,
            newPassword: null as string | null,
            confirmPassword: null as string | null,
        }
    },
    computed: {
        isLoading() {
            const { loadingList } = useQueryManager();
            return loadingList.includes('reset_password');
        },
        token(): any {
            return useRoute().query.token
        },
        disableSubmit() {
            if(this.newPassword && this.confirmPassword) {
                return this.newPassword !== this.confirmPassword;
            }
            return true;
        }
    },
    methods: {
        async submit() {
            this.response = null;
            if(this.newPassword) {
                try {
                    this.response = await this.store.setNewPasswordQuery(this.token, this.newPassword);
                    if(this.response.success) {
                        this.newPassword = null;
                        this.confirmPassword = null;
                        setTimeout(async () => await useRouter().push(this.availableRoutes.login), 3000);
                    }
                } catch(error) {
                    this.response = error
                }
            }
        },
    },
    mounted() {
        useGetstarted().passToForgotPassword();
    },
})
</script>
<template>
    <section id="reset_password-section">
        <message-box
            v-if="response"
            @action="() => useRouter().push(availableRoutes.login)"
            :label="response.success ? $t('done') : $t('error')"
            :message="$keyValidation({
                error: ['SOMETHING_WENT_WRONG'], 
                warning: ['INVALID_PASSWORD', 'LINK_EXPIRED'], 
                success: ['PASSWORD_SUCCESSFULLY_CHANGED']
            }, response)"/>
        <br>
        <br/>
        <label for="reset_password-form" class="flex-row-start-center" style="gap: 15px">
            <div>
                <icon-component icon-name="lock_reset" icon-size="35px"/>
            </div>
            <div>
                <Text class="headline" locale="pages.reset_password.utilities.reset_password_title"/>
                <Text class="description" locale="pages.reset_password.utilities.reset_password_description"/>
            </div>
        </label>
        <br/>
        <br/>
        <form id="reset_password-form" @submit.prevent="submit">
            <custom-input 
                v-model="newPassword" 
                type="password"
                :label="$t('pages.reset_password.utilities.new_password_field')" 
                autocomplete="new-password" 
                name="newpassword"
                placeholder="••••••••••" 
                icon="lock_open" 
                :maxlength="255" 
                :disabled="isLoading"
                :message="$keyValidation({ error: ['INVALID_PASSWORD'] }, response)" 
                required />
            <custom-input 
                v-model="confirmPassword" 
                type="password"
                :label="$t('pages.reset_password.utilities.confirm_password_field')" 
                autocomplete="new-password" 
                name="confirm-password"
                placeholder="••••••••••" 
                icon="lock" 
                :maxlength="255" 
                :disabled="isLoading"
                required />
            <br />
            <button 
                type="submit" 
                class="primary" 
                :disabled="disableSubmit"
                :class="{'loading': isLoading}">
                <Text locale="pages.reset_password.utilities.save"/>
            </button>
            <button 
                type="button" 
                class="white" 
                :disabled="isLoading"
                @click="() => useRouter().push(availableRoutes.forgot_password)">
                <Text locale="pages.reset_password.utilities.cancel"/>
            </button>
        </form>
    </section>
</template>
<style scoped lang="scss">
#reset_password-section {
    max-height: 60vh;
    & > * {
        width: 100%;
    }
    label[for='reset_password-form'] {
        div {
            display: flex;
            flex-direction: column;
            span.headline {
                font-weight: bolder;
                font-size: 1.5rem;
            }
            span.description {
                color: colors.$textSecondary;
                font-size: .9rem;
            }
        }
    }
}
</style>