<script lang="ts">
import colorUtilities from '~/constants/colorUtilities';
export default defineComponent({
    name: "MainLayoutHeader",
    emits: ['foldAction'],
    setup() {
        return {
            $t: useI18nStore().i18n.global.t,
            colorUtilities
        }
    },
    computed: {
        currentRouteKey() {
            return useRouteManagement().config.key
        },
    }
})
</script>

<template>
    <header id="main-header" class="flex-row-center">
        <div id="header-items" class="flex-row-between-center">
            <div id="header-item_left-side">
                <div>
                    <Logo :type="3" size="38"/>
                </div>
            </div>
            <div v-if="currentRouteKey">
                <h3>{{ $t(`pages.${currentRouteKey}.title`) }}</h3>
            </div>
            <div id="header-item_right-side" class="flex-row-between-center">
                <div id="show-more-area">
                    <div id="icon-area" class="hover-effect" @click="()=> $emit('foldAction')">
                        <icon-component icon-name="menu" icon-size="24px" fill/>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header#main-header {
    #header-items {
        width: 100%;
        user-select: none;
        margin-bottom: 3vh;
        #header-item_right-side {
            gap: 1rem;
            #create-btn_right-side {
                gap: .5rem;
                padding: .6rem 1.2rem;
                border-radius: 10rem;
                font-size: .9rem;
                background-color: colors.$whiteColor;
                @include colors.box-shadow-2
            }
            #show-more-area {
                #icon-area {
                    background-color: colors.$surfaceColor2;
                    padding: .4rem;
                    border-radius: 5px;
                }
            }
        }

    }
}
</style>