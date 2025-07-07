<script lang="ts">
import colors from '~/constants/colorUtilities';
export default defineComponent({
    name: 'MainLayoutIndex',
    data() {
        return {
            showSidebar: false
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
    computed: {
        colorUtilities(){
            const colorMode = useColorMode().value;
            return colors(colorMode)
        },
    }
});
</script>

<template>
    <div id="main_layout-tablet" :class="{ 'full': !showSidebar, 'partial': showSidebar }">
        <LayoutTabletMainSidebar :fold="!showSidebar" @fold-action="setSidebarVisibility(!showSidebar)"/>
        <div id="sidebar-fold" class="flex-column-center" v-if="!showSidebar">
            <div id="fold-btn" class="hover-effect bordered" @click="setSidebarVisibility(!showSidebar)">
                <IconComponent :icon-name="`caret_${!showSidebar ? 'right' : 'left'}`" icon-size="13"
                    :color="colorUtilities.$textSecondary" fill />
            </div>
        </div>
        <div id="content" @click.prevent="setSidebarVisibility(false)">
            <LayoutTabletMainHeader />
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$default-padding: 1.5rem;
$gap-header-main: 1.3rem;

#main_layout-tablet {
    display: flex;
    flex-direction: row;
    height: 100%;

    :deep(#sidebar) {
        transition-duration: .5s;
        background-color: colors.$surfaceColor;
        padding: calc($default-padding / 1.1) $default-padding;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: $gap-header-main;
        height: calc(100% - (($default-padding / 1.1) * 2));
        section#sidebar_logo-area {
            div#fold-sidebar {
                display: block;
                position: relative;
                left: 10px;
                top: -15px;
            }
        }

        section#sidebar_history-area {
            overflow-y: auto;
        }
    }

    #sidebar-fold {
        z-index: 101;
        #fold-btn {
            @include colors.box-shadow-2();
            background-color: colors.$surfaceColor;
            padding: .8rem 0;
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
        margin-left: 3rem;
        main {
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
}

#main_layout-tablet.partial {
    $sidebar-width: 260px;

    :deep(#sidebar) {
        width: calc($sidebar-width - ($default-padding * 2));
    }

    #content {
        width: calc(100vw - ($default-padding * 2));
    }
}

#main_layout-tablet.full {
    $sidebar-width: 60px;

    :deep(#sidebar) {
        width: calc($sidebar-width - ($default-padding * 2));

        section#sidebar_logo-area {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        section#sidebar_history-area {
            display: none;
        }

    }

    #sidebar-fold {
        width: 8rem;
        position: absolute;
        height: 100%;
        #fold-btn {
            position: absolute;
        }
    }

    #content {
        width: calc(100vw - $sidebar-width);
    }
}
</style>