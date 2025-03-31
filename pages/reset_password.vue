<template>
    <div id="reset-password-page" class="flex-column-center default-height default-width">
        <LoadingScreen v-if="isLoading || !response" />
        <div v-else-if="response.success" class="flex-column-center" style="gap: 30px">
            <logo size="250"/>
            <div style="width: 20rem">
                <FormsResetPassword />
            </div>
        </div>
        <div style="width: 20rem;" v-else>
            <LinkExpired/>
        </div>
    </div>
</template>
<script lang="ts">
import { $availableRoutes } from '~/configs/routes.config';

export default {
    name: 'ResetPassword',
    setup() {
        return {
            $availableRoutes
        }
    },
    computed: {
        token(): any {
            return useRoute().query.token
        },
        isLoading() {
            return useQueryManager().loadingList.includes(('check_reset_password_token'));
        }
    },
    data() {
        return {
            response: null as any
        }
    },
    async mounted() {
        if (this.token) {
            try {
                this.response = await useUser().checkResetPasswordTokenQuery(this.token);
            } catch (error) {
                this.response = error;
            }
        } else {
            useRouter().push($availableRoutes.home);
        }
    }
}
</script>