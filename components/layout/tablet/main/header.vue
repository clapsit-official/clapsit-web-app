<script setup lang="ts">
import { $availableRoutes } from '~/configs/routes.config';
import colorUtilities from '~/constants/colorUtilities';
</script>

<template>
    <header id="main-header" class="flex-row-center">
        <div id="header-items" class="flex-row-between-center">
            <div id="header-item_left-side">
                <div  
                    @click="useRouter().push($availableRoutes.home)"
                    style="gap: 5px"
                    class="flex-row-between-center hover-effect" 
                    v-show="useRouteManagement().config.key !== 'home'">
                    <div>
                    <IconComponent icon-name="arrow_back"/>
                    </div>
                    <span>Home</span>
                </div>
            </div>
            <div id="header-item_right-side" class="flex-row-between-center">
                <div style="width: 80px; text-align: center;">
                    <b>My Clapsit</b>
                </div>
                <div id="create-btn_right-side" class="flex-row-center hover-effect" @click="useModal().provide('logout')">
                    <div>
                        <icon-component icon-name="logout" icon-size="18px" :color="colorUtilities.$errorColor"/>
                    </div>
                    <Text locale="buttons.logout"/>
                </div>
                <profile-circle :value="useUser().getUserDetails.fullname"/>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header#main-header {
    #header-items {
        width: 100%;
        user-select: none;
        #header-item_right-side {
            gap: 1.5rem;
            #create-btn_right-side {
                gap: .5rem;
                padding: .6rem 1.2rem;
                border-radius: 10rem;
                font-size: .9rem;
                background-color: colors.$whiteColor;
                @include colors.box-shadow-2
            }
        }

    }
}
</style>