<template>
    <div id="coming-soon-component" class="flex-column-center">
        <logo />
        <br>
        <br>
        <br>
        <img :src="randomVector" alt="vector" :srcset="randomVector">
        <div id="text-1">
            <Text locale="coming_soon"/>
        </div>
        <div id="text-2">
            <Text locale="we_are_working_on_it"/>
        </div>
    </div>
</template>
<script lang="ts">
import amico from 'assets/images/vectors/code-snippets-amico.svg';
import amico2 from 'assets/images/vectors/Programming-amico.svg';
import amico3 from 'assets/images/vectors/Programming-cuate.svg';
import amico4 from 'assets/images/vectors/Static assets-amico.svg';
import amico5 from 'assets/images/vectors/Static assets-pana.svg';
import amico6 from 'assets/images/vectors/Static assets-cuate.svg';
import amico7 from 'assets/images/vectors/Website Creator-amico.svg';
export default {
    name: "ComingSoon",
    computed: {
        randomVector() {
            const vectors = [amico, amico2, amico3, amico4, amico5, amico6, amico7]
            return vectors[getRandomBetween(0, vectors.length - 1)]
        }
    }

}
</script>

<style lang="scss" scoped>
#coming-soon-component {
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

    div#text-1 {
        font-size: 1.8rem;
        font-weight: bold;
    }

    div#text-2 {
        font-size: 1rem;
        color: colors.$textSecondary;
    }
}
</style>