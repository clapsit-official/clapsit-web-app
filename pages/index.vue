<template>
  <div id="coming-soon-page" class="flex-column-center">
    <img :src="logo" alt="logo">
    <img :src="randomVector" alt="vector" :srcset="randomVector">
    <span id="text-1">
        Coming soon...
    </span>
    <span id="text-2">
        We're working on it!
    </span>
  </div>
</template>
<script lang="ts">
import logo from '~/assets/images/logo1.svg';
import amico from '~/assets/images/code-snippets-amico.svg';
import amico2 from '~/assets/images/Programming-amico.svg';
import amico3 from '~/assets/images/Programming-cuate.svg';
export default {
    name: "Home",
    setup() {
        return {
            logo,
        }
    },
    computed: {
        randomVector(){
            const vectors = [amico, amico2, amico3]
            return vectors[getRandomBetween(0, vectors.length - 1)]
        }
    }

}
</script>

<style lang="scss" scoped>
#coming-soon-page{
    display: flex;
    height: 100vh;
    flex-direction: column;

    img[alt='logo']{
        max-width: 10rem;
        width: 40vw;
        padding: 0 0 2rem 0;
    }
    
    img[alt='vector']{
        max-width: 35rem;
        width: 70vw;
        padding: 2rem 0;

    }
    span#text-1{
        font-size: 1.8rem;
        font-weight: bold;
    }
    span#text-2{
        font-size: 1rem;
        color: colors.$textSecondary;
    }
}
</style>