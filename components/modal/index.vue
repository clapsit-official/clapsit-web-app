<script lang="ts">
import { defineComponent, computed } from 'vue'
import { defineAsyncComponent } from 'vue'
import type { AvailableModals } from '~/stores/modal';
import colors from '~/constants/colorUtilities';

const modalMap: Record<string, () => Promise<any>> = {
    user_account: () => import('~/components/modal/views/user_account.vue'),
    logout: () => import('~/components/modal/views/logout_prompt.vue'),
    session_expired: () => import('~/components/modal/views/session_expired.vue'),
    json_generator_curl: () => import('~/components/modal/views/json_generator_curl.vue'),
    settings: () => import('~/components/modal/views/settings.vue'),
}

export default defineComponent({
    name: "Modal",
    setup() {
        const store = useModal();

        const resolvedViews = computed(() => {
            return store.views.map(modal => {
                const component = defineAsyncComponent(modalMap[modal.key])
                return {
                    label: modal.label,
                    key: modal.key,
                    icon: modal.icon,
                    component
                }
            });
        });

        return {
            store,
            resolvedViews
        }
    },
    methods: {
        closeModal(key: AvailableModals) {
            this.store.deprive(key);
        },
        outsideClick() {
            if(this.resolvedViews[this.resolvedViews.length - 1]) {
                this.closeModal(this.resolvedViews[this.resolvedViews.length - 1].key);
            }
        },
        handleEscKey(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                this.outsideClick();
            }
        }
    },
    mounted() {
        window.addEventListener('keydown', this.handleEscKey);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleEscKey);
    },
    computed: {
        colorUtilities(){
            const colorMode = useColorMode().value;
            return colors(colorMode)
        }
    },
})
</script>

<template>
    <div id="modal-component">
        <section id="modal-content" @click.prevent="outsideClick" class="flex-column-center"
            v-if="resolvedViews.length">
            <div class="modal-area" v-for="(modal, index) in resolvedViews" @click.stop :key="index">
                <header class="flex-row-between-center">
                    <div class="flex-row-between-center" style="gap: 5px">
                        <div v-show="modal.icon">
                            <icon-component v-if="modal.icon" :icon-name="modal.icon" icon-size="25"/>
                        </div>
                        <h2>{{ modal.label }}</h2>
                    </div>
                    <div id="close-btn" class="hover-effect" @click="closeModal(modal.key)">
                        <icon-component :color="colorUtilities.$textPrimary" icon-name="close" icon-size="20" />
                    </div>
                </header>
                <component :is="modal.component" />
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
#modal-component {
    section#modal-content {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.25);
        @include animations.fadeIn(.5s);

        .modal-area {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            position: absolute;
            background-color: colors.$surfaceColor2;
            overflow-y: auto;
            padding: 1.7rem;
            border-radius: 1rem;
            @include colors.box-shadow-1;
            header {
                #close-btn {
                    position: relative;
                    top: -15px;
                    right: -10px;
                }
            }
        }
    }
}

.desktop-app-container {
    #modal-component {
        section#modal-content {
            .modal-area {
                max-width: 50%;
                min-width: 15%;
                max-height: 80%;
                @include animations.slideDownBounce(.5s);
            }
        }
    }
}

.tablet-app-container {
    #modal-component {
        section#modal-content {
            .modal-area {
                max-width: 70%;
                min-width: 15%;
                max-height: 80%;
                @include animations.slideDownBounce(1s);
            }
        }
    }
}

.mobile-app-container {
    #modal-component {
        section#modal-content {
            .modal-area {
                max-width: 75%;
                min-width: 15%;
                max-height: 80%;
                @include animations.slideDownBounce(1s);
            }
        }
    }
}
</style>