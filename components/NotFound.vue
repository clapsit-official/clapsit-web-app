<template>
    <div id="not-found-component" class="flex-column-center">
        <div class="flex-column-center">
            <img :src="logo" alt="logo">
            <img :src="randomVector" alt="vector" :srcset="randomVector">
            <span id="text-1">
                {{ $t('not_found') }}
            </span>
            <span id="text-2">
                {{ $t('not_found_description') }}
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import logo from '~/assets/images/logo1.svg';
import vector1 from '~/assets/images/404 error with a landscape-amico.svg';
import vector2 from '~/assets/images/404 error with a landscape-rafiki.svg';
import vector3 from '~/assets/images/404 error with people holding the numbers-amico.svg';
import vector4 from '~/assets/images/404 error with people holding the numbers-bro.svg';
import vector5 from '~/assets/images/404 Error-amico.svg';

export default {
    name: "NotFound",
    setup() {
        return {
            logo,
            $t: useI18nStore().i18n.global.t,
        }
    },
    computed: {
        randomVector() {
            const vectors = [vector1, vector2, vector3, vector4, vector5];
            return vectors[getRandomBetween(0, vectors.length - 1)];
        }
    }

}
</script>

<style lang="scss" scoped>
#not-found-component {
    & > div {
        margin-top: 3rem;
        max-height: 100%;
    }

    img[alt='logo'] {
        max-width: 10rem;
        width: 40vw;
        padding: 0 0 2rem 0;
    }

    img[alt='vector'] {
        max-width: 35rem;
        width: 70vw;
        padding: 2rem 0;

    }

    span#text-1 {
        font-size: 1.8rem;
        font-weight: bold;
        text-align: center;
        margin: 1rem 0;
    }

    span#text-2 {
        text-align: center;
        max-width: 300px;
        font-size: 1rem;
        color: colors.$textSecondary;
    }
}
</style>