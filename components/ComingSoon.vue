<template>
    <div id="coming-soon-component" class="flex-column-center">
      <img :src="logo" alt="logo">
      <img :src="randomVector" alt="vector" :srcset="randomVector">
      <span id="text-1">
          {{ $t('coming_soon') }}
      </span>
      <span id="text-2">
          {{$t('we_are_working_on_it')}}
      </span>
    </div>
  </template>
  <script lang="ts">
  import logo from '~/assets/images/logo1.svg';
  import amico from '~/assets/images/code-snippets-amico.svg';
  import amico2 from '~/assets/images/Programming-amico.svg';
  import amico3 from '~/assets/images/Programming-cuate.svg';
  import amico4 from '~/assets/images/Static assets-amico.svg';
  import amico5 from '~/assets/images/Static assets-pana.svg';
  import amico6 from '~/assets/images/Static assets-cuate.svg';
  import amico7 from '~/assets/images/Website Creator-amico.svg';
  export default {
      name: "ComingSoon",
      setup() {
          return {
              logo,
              $t: useI18nStore().i18n.global.t,
          }
      },
      computed: {
          randomVector(){
              const vectors = [amico, amico2, amico3, amico4, amico5, amico6, amico7]
              return vectors[getRandomBetween(0, vectors.length - 1)]
          }
      }
  
  }
  </script>
  
  <style lang="scss" scoped>
  #coming-soon-component{
      display: flex;
      height: 90vh;
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