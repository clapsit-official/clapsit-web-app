<script lang="ts">
import ClapsitTeachLang from 'assets/images/vectors/English teacher-amico.svg';
import ClapsitMentor from 'assets/images/vectors/Webinar-pana.svg';
import Clapsit from 'assets/images/vectors/Webinar-amico.svg';
import ClapsitHr from 'assets/images/vectors/Telecommuting-rafiki.svg';
export default defineComponent({
    name: "MainNavigation",
    setup() {
        return {
            ClapsitMentor,
            ClapsitTeachLang,
            ClapsitHr,
            versions: [
                {
                    to: '/assistant/json_generator',
                    title: 'JSON Generator',
                    description: 'Generate and design JSON objects however you want!',
                    imgSrc: ClapsitTeachLang
                },
                {
                    to: '/',
                    title: 'Clapsit HR',
                    description: 'Bring your trip plans to life – get there, stay there, find things to see and do.',
                    imgSrc: ClapsitHr
                },
                {
                    to: '/',
                    title: 'Clapsit Mentor',
                    description: 'Bring your trip plans to life – get there, stay there, find things to see and do.',
                    imgSrc: ClapsitMentor
                },
                {
                    to: '/',
                    title: 'Learn a language',
                    description: 'Bring your trip plans to life – get there, stay there, find things to see and do.',
                    imgSrc: ClapsitTeachLang
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
                placeholder="Search your journey..."
                type="search" />
        </form>
        <div id="options-area">
            <nav>
                <AssistantNavItem
                    v-for="(version, index) in [...versions]"
                    :key="index"
                    :to="version.to"
                    :title="version.title"
                    :description="version.description"
                    :img-src="version.imgSrc"
                />
            </nav>
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