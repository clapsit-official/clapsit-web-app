<script setup lang="ts">
import { $availableRoutes } from '~/configs/routes.config';
</script>

<template>
    <header id="main-header" class="flex-row-center">
        <div id="header-items" class="flex-row-between-center">
            <div id="header-item_left-side">
                <a  
                    :href="$availableRoutes.home"
                    style="gap: 5px"
                    class="flex-row-between-center hover-effect black" 
                    v-show="useRouteManagement().config.key !== 'home'">
                    <div>
                    <IconComponent icon-name="arrow_back"/>
                    </div>
                    <span>Home</span>
                </a>
            </div>
            <div id="header-item_right-side" class="flex-row-between-center">
                <div style="text-align: center;">
                    <b class="beta-version bordered">BETA</b>
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
        #header-item_right-side {
            gap: 1.5rem;
            #create-btn_right-side {
                color: colors.$blackColor;
                gap: .5rem;
                padding: .6rem 1.2rem;
                border-radius: 10rem;
                font-size: .8rem;
                background-color: colors.$whiteColor;
                @include colors.box-shadow-2
            }
            .beta-version {
                $beta-size: .7rem;
                user-select: none;
                padding: calc($beta-size / 2) calc($beta-size / 1.2);
                font-size: $beta-size;
                background-color: colors.$surfaceColor2;
                border-radius: .35rem;
                color: colors.$textPrimary;
            }
        }

    }
}
</style>