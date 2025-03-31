<template>
    <div id="link-expired-component" class="flex-column-center">
        <div class="flex-column-center">
            <logo/>
            <br/>
            <img :src="randomVector" alt="vector" :srcset="randomVector">
            <span id="text-1">
                <Text locale="link_expired"/>
            </span>
            <span id="text-2">
                <Text locale="link_expired_description"/>
            </span>
            <BackToHomeButton/>
        </div>
    </div>
</template>
<script lang="ts">
import vector1 from 'assets/images/vectors/No data-pana.svg';
import vector2 from 'assets/images/vectors/No data-cuate.svg';
import { $availableRoutes } from '~/configs/routes.config';

export default {
    name: "LinkExpired",
    setup() {
        return {
            $availableRoutes
        }
    },
    computed: {
        randomVector() {
            const vectors = [vector1, vector2];
            return vectors[getRandomBetween(0, vectors.length - 1)];
        }
    }

}
</script>

<style lang="scss" scoped>
#link-expired-component {
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
        max-height: 30vh;
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