<script lang="ts">
import colorUtilities from '~/constants/colorUtilities';

export default defineComponent({
    name: "SessionExpired",
    setup() {
        return {
            colorUtilities
        }
    },
    methods: {
        async logOut() {
            useAuth().resetAuth();
            useModal().deprive('session_expired');
            window.location.reload();
        }
    },
    beforeUnmount() {
        this.logOut();
    },
});
</script>
<template>
    <div id="session_expired-component" class="flex-column-center">
        <div class="icon-area">
            <icon-component icon-name="warning" :color="colorUtilities.$warningColor" fill icon-size="55px" />
        </div>
        <strong>
            <Text locale="session_expired" />
        </strong>
        <button class="white" @click="logOut">
            <Text locale="buttons.ok" />
        </button>
    </div>
</template>
<style lang="scss">
#session_expired-component {
    gap: 2rem;
}
</style>