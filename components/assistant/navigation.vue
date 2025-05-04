<script lang="ts">
import ClapsitAITranslator from 'assets/images/vectors/Learning languages-rafiki.svg';
import ClapsitMentor from 'assets/images/vectors/Webinar-pana.svg';
import ClapsitJSONGenerator from 'assets/images/vectors/Developer activity-bro.svg';
import ClapsitHr from 'assets/images/vectors/Telecommuting-rafiki.svg';
export default defineComponent({
    name: "MainNavigation",
    setup() {
        return {
            $t: useI18nStore().i18n.global.t,
            ClapsitMentor,
            ClapsitAITranslator,
            ClapsitHr,
            versions: [
                {
                    key: 'json_generator',
                    title: useI18nStore().i18n.global.t('assistants.json_generator.label'),
                    description: useI18nStore().i18n.global.t('assistants.json_generator.slogan'),
                    imgSrc: ClapsitJSONGenerator
                },
                {
                    key: '/',
                    title: 'Clapsit HR',
                    description: 'Bring your trip plans to life – get there, stay there, find things to see and do.',
                    imgSrc: ClapsitHr
                },
                {
                    key: '/',
                    title: 'Clapsit Mentor',
                    description: 'Bring your trip plans to life – get there, stay there, find things to see and do.',
                    imgSrc: ClapsitMentor
                },
                {
                    key: 'ai_translator',
                    title: useI18nStore().i18n.global.t('assistants.ai_translator.label'),
                    description: useI18nStore().i18n.global.t('assistants.ai_translator.slogan'),
                    imgSrc: ClapsitAITranslator
                },
            ]
        }
    },
    computed: {
        deviceType() {
            return useCoreAppStore().getDeviceType;
        }
    }
});
</script>

<template>
    <section :id="`main-navigation`" :class="`nav-${deviceType}`">
        <form id="search-nav-area">
            <custom-input 
                left-icon="search"
                :placeholder="$t('search_for', {value: $t('your_journey').toLowerCase()})"
                type="search" />
        </form>
        <div id="options-area">
            <nav>
                <AssistantNavItem
                    v-for="(version, index) in [...versions]"
                    :key="index"
                    :target="version.key"
                    :title="version.title"
                    :description="version.description"
                    :img-src="version.imgSrc"
                />
            </nav>
            <AssistantHistories/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#main-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    form#search-nav-area {
        width: 90%;
        position: relative;
        left: -1rem;
        :deep(.custom-input-component) {
            max-width: 100%;
            .input-area__center {
                width: 100%;
                border-radius: 1rem;
                border: 1px solid colors.$dividerColor;
                outline: none;
                padding: 0 1rem;
                font-size: 1rem;
                .input-area__left {
                    width: 5%;
                }
            }
        }
    }
}
section#main-navigation.nav-desktop {
    width: 50rem;
    #options-area {
        width: 60rem;
        max-width: 70vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        nav {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
        }
    }
}
section#main-navigation.nav-tablet {
    min-width: 30rem;
    #options-area {
        width: 60rem;
        max-width: 70vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        nav {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
        }
    }
}
section#main-navigation.nav-mobile {
    width: 80vw;
    #options-area {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        nav {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: nohuswrap;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
        }
    }
}
</style>