<template>
    <div class="logo">
        <section id="logo-area" class="flex-row-center">
            <a :href="availableRoutes.home" class="animation" :class="{'pulse': isLoading}">
                <img :src="show" alt="Logo" :srcset="show" :width="size">
            </a>
        </section>
    </div>
</template>
<script lang="ts">
import { $availableRoutes } from '~/configs/routes.config';
import logo1 from '~/assets/images/logo1.svg';
import logo2 from '~/assets/images/logo2.svg';
import logo1_m from '~/assets/images/logo1-m.svg';
import logo2_m from '~/assets/images/logo2-m.svg';
import logo3 from '~/assets/images/logo-icon.svg';

export default {
    name: "LogoComponent",
    setup() {
        const { getBrandName } = useCoreAppStore();
        return {
            getBrandName,
            availableRoutes: $availableRoutes,
        }
    },
    props: {
        size: {
            type: String,
            default: '250'
        },
        type: {
            type: Number as PropType<1 | 2 | 3>,
            default: () => 2
        },
        noAnimation: {
            type: Boolean,
            default: () => false,
        },
        small: {
            type: Boolean,
            default: () => false,
        }
    },
    computed: {
        isLoading() {
            const { loadingList } = useQueryManager();
            return loadingList.length > 0;
        },
        logos(): any {
            return {
                logo1, logo2, logo1_m, logo2_m, logo3
            };
        },
        show() {
            if(this.logos[this.type] !== null) {
                if(this.small && this.type !== 3){
                    return this.logos[`logo${this.type}_m`];
                }
                return this.logos[`logo${this.type}`];
            }
            return this.logos.logo1;
        }
    }
};
</script>
<style lang="scss" scoped>
.logo {
    #logo-area {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        a {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img[alt='logo'] {
            position: relative;
            top: .2rem;
        }
        img[alt='logo-icon'] {
        }
    }
}
</style>