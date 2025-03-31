<template>
    <div id="not-available-component" class="flex-column-center">
        <logo />
        <img :src="randomVector" alt="vector" :srcset="randomVector">
        <span id="text-1">
            <Text locale="please_try_again_later"/>            
        </span>
        <span id="text-2">
            <Text locale="service_temporarily_unavailable"/>
        </span>
    </div>
</template>
<script lang="ts">
import vector1 from 'assets/images/vectors/503 Error Service Unavailable-bro.svg';
import vector2 from 'assets/images/vectors/503 Error Service Unavailable-cuate.svg';
import vector3 from 'assets/images/vectors/503 Error Service Unavailable-pana.svg';

export default {
    name: "NotAvailable",
    computed: {
        randomVector() {
            const vectors = [vector1, vector2, vector3]
            return vectors[getRandomBetween(0, vectors.length - 1)]
        }
    }

}
</script>

<style lang="scss" scoped>
#not-available-component {
    display: flex;
    height: 90vh;
    flex-direction: column;

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
    }

    span#text-2 {
        font-size: 1rem;
        color: colors.$textSecondary;
    }
}
</style>