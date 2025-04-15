<script lang="ts">
import colorUtilities from '~/constants/colorUtilities';
import type { UserAssistantKeyItem } from '~/types/assistants.types';
export default defineComponent({
    name: 'MainLayoutSidebar',
    emits: ['foldAction'],
    setup() {
        return {
            colorUtilities,
            $t: useI18nStore().i18n.global.t
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
                <div id="fold-sidebar">
                    <div>
                        <icon-component 
                            @click="() => $emit('foldAction')"
                            hover
                            icon-name="left_panel_close" 
                            icon-size="22px" 
                            :color="colorUtilities.$textPrimary"/>
                    </div>
                </div>
                <div id="right_side-items" class="flex-row-between-center">
                    <div>
                        <icon-component 
                            hover
                            icon-name="search" 
                            icon-size="22px" 
                            :color="colorUtilities.$textPrimary"/>
                    </div>
                    <div id="right_side-create-new" class="flex-row-center">
                        <icon-component 
                            hover
                            icon-name="edit_square" 
                            icon-size="26px" 
                            :color="colorUtilities.$textPrimary"/>
                    </div>
                </div>
            </section>
            <section v-else style="height: 100%; gap: 20px" class="flex-column-justify-start">
                <div>
                    <icon-component hover icon-name="search"/>
                </div>
                <div>
                    <icon-component hover icon-name="edit_square"/>
                </div>
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
                <div class="sidebar_others-item hover-effect">
                    <div>
                        <icon-component icon-name="adjustment" icon-size="20px"/>
                    </div>
                    <Text v-if="!fold" locale="settings"/>
                </div>
            </section>
        </div>
</template>
<style lang="scss" scoped>
#sidebar {
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