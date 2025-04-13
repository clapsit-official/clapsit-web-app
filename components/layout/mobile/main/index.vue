<script lang="ts">
import colorUtilities from '~/constants/colorUtilities';
export default defineComponent({
    name: 'MainLayoutIndex',
    setup() {
        return {
            colorUtilities
        }
    },
    data() {
        return {
            showSidebar: false
        }
    },
    methods: {
        setSidebarVisibility(val: boolean) {
            this.showSidebar = val;
        }
    },
});
</script>

<template>
    <div id="main_layout-mobile">
        <div id="content">
            <LayoutMobileMainHeader @fold-action="() => setSidebarVisibility(true)"/>
            <main @click.prevent="setSidebarVisibility(false)">
                <LayoutMobileMainSidebar @fold-action="() => setSidebarVisibility(false)" v-if="showSidebar"/>
                <slot />
            </main>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$default-padding: 1.5rem;
$gap-header-main: .5rem;

#main_layout-mobile {
    display: flex;
    flex-direction: row;
    height: 100%;
    #content {
        @include colors.box-shadow-4;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: $gap-header-main;
        padding: calc($default-padding / 1.1) $default-padding;
        background-color: colors.$backgroundColor;

        main {
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
}

</style>