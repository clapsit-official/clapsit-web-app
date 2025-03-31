<script lang="ts">
import colorUtilities from '~/constants/colorUtilities';
export default defineComponent({
    name: 'MainLayoutSidebar',
    emits: ['flodAction'],
    setup() {
        return {
            colorUtilities
        }
    },
    props: {
        flod: {
            type: Boolean,
            required: true,
        }
    }
});
</script>
<template>
        <div id="sidebar">
            <section id="sidebar_logo-area" class="flex-row-between-center">
                <Logo :type="flod ? 3 : 1" :size="flod ? '35px' : '150px'"/>
            </section>
            <section v-if="!flod" id="sidebar_main-tools" class="flex-row-between-center">
                <div id="flod-sidebar">
                    <div>
                        <icon-component 
                            @click="() => $emit('flodAction')"
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
                    <icon-component hover icon-name="clock_arrow" @click="() => $emit('flodAction')"/>
                </div>
            </section>
            <section v-if="!flod" id="sidebar_history-area">
                <div v-for="i in 40" style="margin: .4rem 0;" class="hover-effect ellipsis">
                    {{ 40 - i + 1 }}. Sidebar example item
                </div>
            </section>
            <section id="sidebar_others">
                <div class="sidebar_others-item hover-effect">
                    <div>
                        <icon-component icon-name="adjustment" icon-size="20px"/>
                    </div>
                    <Text v-if="!flod" locale="settings"/>
                </div>
            </section>
        </div>
</template>
<style lang="scss" scoped>
#sidebar {
    section#sidebar_history-area {
        height: 90%;
        font-size: .85rem;
        width: 100%;
    }
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