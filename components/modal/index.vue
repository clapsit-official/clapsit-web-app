<script lang="ts">
import { defineComponent, computed } from 'vue'
import { defineAsyncComponent } from 'vue'
import type { AvailableModals } from '~/stores/modal';

const modalMap: Record<string, () => Promise<any>> = {
    user_account: () => import('~/components/modal/views/user_account.vue'),
    logout: () => import('~/components/modal/views/logout_prompt.vue'),
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
            this.closeModal(this.resolvedViews[this.resolvedViews.length - 1].key);
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
    }
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
                            <icon-component :icon-name="modal.icon" icon-size="25"/>
                        </div>
                        <h2>{{ modal.label }}</h2>
                    </div>
                    <div id="close-btn" class="hover-effect" @click="closeModal(modal.key)">
                        <icon-component icon-name="close" icon-size="20" />
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
        backdrop-filter: blur(2px);
        background-color: rgba(0, 0, 0, 0.25);
        @include animations.fadeIn(.3s);

        .modal-area {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            position: absolute;
            background-color: colors.$surfaceColor;
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
                @include animations.slideInRightBounce(1s);
            }
        }
    }
}

.tablet-app-container {
    #modal-component {
        section#modal-content {
            .modal-area {
                max-width: 50%;
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
                top: 15vh;
                max-width: 75%;
                min-width: 15%;
                max-height: 80%;
                @include animations.slideDownBounce(1s);
            }
        }
    }
}
</style>