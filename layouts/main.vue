<script lang="ts">
export default {
    name: "MainLayout",
    computed: {
        deviceType() {
            return useCoreAppStore().getDeviceType;
        }
    },
    created() {
        useAssistant().updateUserAssistantKeys();
    }
}
</script>
<template>
    <body id="main_layout-area" class="default-width default-height">
        <layout-desktop-main v-if="deviceType === 'desktop'">
            <slot/>
        </layout-desktop-main>
        <layout-tablet-main v-else-if="deviceType === 'tablet'">
            <slot/>
        </layout-tablet-main>
        <layout-mobile-main v-else-if="deviceType === 'mobile'">
            <slot/>
        </layout-mobile-main>
        <NotFound v-else/>
    </body>
</template>
<style lang="scss" scoped>
#main_layout-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    & > * {
        width: 100%;
    }
}
</style>