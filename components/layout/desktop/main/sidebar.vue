<script lang="ts">
import colors from '~/constants/colorUtilities';
export default defineComponent({
    name: 'MainLayoutSidebar',
    emits: ['foldAction'],
    setup() {
        return {
            $t: useI18nStore().i18n.global.t
        }
    },
    computed: {
        colorUtilities(){
            const colorMode = useColorMode().value;
            return colors(colorMode)
        }
    },
    props: {
        fold: {
            type: Boolean,
            required: true,
        }
    },
});
</script>
<template>
        <div id="sidebar">
            <section id="sidebar_logo-area" class="flex-row-between-center">
                <Logo :type="fold ? 3 : 1" :size="fold ? '35px' : '150px'"/>
            </section>
            <section v-if="!fold" id="sidebar_main-tools" class="flex-row-between-center">
                <div id="fold-sidebar" class="flex-row-center" style="gap: .2rem;">
                    <div>
                        <icon-component 
                            icon-name="clock_arrow" 
                            icon-size="1rem" 
                            :color="colorUtilities.$textPrimary"/>
                    </div>
                    <div class="recently">
                        <span><Text locale="your_apis"/>:</span>
                    </div>
                </div>
                <div id="right_side-items" class="flex-row-between-center">
                    <div>
                        <icon-component 
                            @click="() => $emit('foldAction')"
                            hover
                            icon-name="left_panel_close" 
                            icon-size="22px" 
                            :color="colorUtilities.$textPrimary"/>
                    </div>
                </div>
            </section>
            <section v-else style="height: 100%; gap: 20px" class="flex-column-justify-start">
                <div>
                    <icon-component hover icon-name="clock_arrow" @click="() => $emit('foldAction')"/>
                </div>
            </section>
            <AssistantSidebarItems v-show="!fold"/>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section id="sidebar_others">
                <!-- <div class="sidebar_others-item hover-effect">
                    <div>
                        <icon-component icon-name="adjustment" icon-size="20px"/>
                    </div>
                    <Text v-if="!fold" locale="settings"/>
                </div> -->
            </section>
        </div>
</template>
<style lang="scss" scoped>
#sidebar {
    border-right: 1px solid colors.$dividerColor;
    section#sidebar_main-tools {
        #right_side-items {
            gap: .5rem;
            #right_side-create-new {
                & > * {
                    position: relative;
                    top: -1px;
                    left: 1px;
                }
            }
        }
        .recently {
            font-size: .85rem;
        }
        padding: 1rem 0;
        border-bottom: 1px solid colors.$dividerColor;
    }
    section#sidebar_others {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        .sidebar_others-item {
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }
}
</style>