<script lang="ts">
export default {
    name: "MainLayout",
    computed: {
        deviceType() {
            return useCoreAppStore().getDeviceType;
        },
        cId() {
            const cData = useAssistant().data.keys.find(item => item.c_key === useRoute().query.c_key);
            if(cData) {
                return cData.id;
            }
            return null;
        }
    },
    created() {
        useAssistant().updateUserAssistantKeys();
        if(this.cId) {
            useAssistant().updateAssistantKeyHistoryById(this.cId);
        }
    }
}
</script>
<template>
    <body id="main_layout-area" class="default-width default-height" :key="cId?.toString()">
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