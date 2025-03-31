<template>
    <div id="not-found-component" class="flex-column-center">
        <div class="flex-column-center">
            <logo/>
            <br/>
            <img :src="randomVector" alt="vector" :srcset="randomVector">
            <span id="text-1">
                <Text locale="not_found"/>
            </span>
            <span id="text-2">
                <Text locale="not_found_description"/>
            </span>
            <BackToHomeButton/>
        </div>
    </div>
</template>
<script lang="ts">
import vector1 from 'assets/images/vectors/404 error with a landscape-amico.svg';
import vector2 from 'assets/images/vectors/404 error with a landscape-rafiki.svg';
import vector3 from 'assets/images/vectors/404 error with people holding the numbers-amico.svg';
import vector4 from 'assets/images/vectors/404 error with people holding the numbers-bro.svg';
import vector5 from 'assets/images/vectors/404 Error-amico.svg';
import { $availableRoutes } from '~/configs/routes.config';

export default {
    name: "NotFound",
    setup() {
        return {
            $availableRoutes
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
    }

    img[alt='logo'] {
        max-width: 10rem;
        width: 40vw;
        padding: 0 0 2rem 0;
    }

    img[alt='vector'] {
        max-width: 35rem;
        max-height: 40vh;
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
        max-width: 400px;
        font-size: 1rem;
        color: colors.$textSecondary;
    }
}
</style>