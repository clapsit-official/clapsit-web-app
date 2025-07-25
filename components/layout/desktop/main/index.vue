<script lang="ts">
import colors from '~/constants/colorUtilities';
export default defineComponent({
    name: 'MainLayoutIndex',
    data() {
        return {
            showSidebar: true
        }
    },
    computed: {
        colorUtilities(){
            const colorMode = useColorMode().value;
            return colors(colorMode)
        }
    },
    methods: {
        setSidebarVisibility(val: boolean) {
            this.showSidebar = val;
            if (val) {
                localStorage.setItem('main-layout-sidebar', val.toString());
            } else {
                localStorage.removeItem('main-layout-sidebar');
            }
        }
    },
    mounted() {
        if (localStorage.getItem('main-layout-sidebar')) {
            this.showSidebar = true;
        } else {
            this.showSidebar = false;
        }
    }
});
</script>

<template>
    <div id="main_layout-desktop" :class="{ 'full': !showSidebar, 'partial': showSidebar }">
        <LayoutDesktopMainSidebar :fold="!showSidebar" @fold-action="setSidebarVisibility(!showSidebar)"/>
        <div id="sidebar-fold" class="flex-column-center" v-if="!showSidebar">
            <div id="fold-btn" class="hover-effect bordered" @click="setSidebarVisibility(!showSidebar)">
                <IconComponent :icon-name="`caret_${!showSidebar ? 'right' : 'left'}`" icon-size="13"
                    :color="colorUtilities.$textSecondary" fill />
            </div>
        </div>
        <div id="content">
            <LayoutDesktopMainHeader />
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$default-padding: 1.5rem;
$gap-header-main: 1.8rem;

#main_layout-desktop {
    display: flex;
    flex-direction: row;
    height: 100vh;

    :deep(#sidebar) {
        transition-duration: .5s;
        background-color: colors.$surfaceColor;
        padding: calc($default-padding / 1.1) $default-padding;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        section#sidebar_logo-area {
            div#fold-sidebar {
                display: block;
                position: relative;
                left: 10px;
                top: -15px;
            }
            margin-bottom: 1.8rem;
        }

        section#sidebar_history-area {
            overflow-y: auto;
        }
    }

    #sidebar-fold {
        width: 0;

        #fold-btn {
            background-color: colors.$surfaceColor;
            padding: .8rem 0;
            @include colors.box-shadow-2();
            border-radius: .3rem;
        }
    }

    #content {
        @include colors.box-shadow-4;
        display: flex;
        flex-direction: column;
        gap: $gap-header-main;
        padding: calc($default-padding / 1.1) $default-padding;
        background-color: colors.$backgroundColor;

        main {
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;
        }
    }
}

#main_layout-desktop.partial {
    $sidebar-width: 20dvw;
    :deep(#sidebar) {
        width: calc($sidebar-width - ($default-padding * 2));
        max-width: 300px;
    }
    #content {
        width: 100%;
    }
}

#main_layout-desktop.full {
    $sidebar-width: 60px;

    :deep(#sidebar) {
        width: calc($sidebar-width - ($default-padding * 2));

        section#sidebar_logo-area {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

    }

    #content {
        width: 100%;
    }
}
</style>