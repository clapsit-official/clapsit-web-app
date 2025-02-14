//@ts-nocheck
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-13',
  devtools: { enabled: true },
  // @ts-ignore
  app: {
      head: {
          meta: [],
      },
  },

  // @ts-ignore
  devServer: {
      port: 3000,
      https: false
  },
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              '@use "assets/stylesheets/utilities/colors" as colors;' +
              '@use "assets/stylesheets/utilities/configs" as configs;' +
              '@use "assets/stylesheets/utilities/responsive" as responsive;' +
              '@use "assets/stylesheets/utilities/animations" as animations;' +
              '@use "assets/stylesheets/utilities/fonts" as fonts;'
        }
      }
    }
  },
  css: [
    '~/assets/stylesheets/global.scss',
  ],
  plugins: [],
  build: {},
  modules: ["@pinia/nuxt", '@nuxt/devtools'],
  pinia: { storesDirs: ['./stores/**', './stores/**/*'] },
  imports: {
      dirs: [
          // Scan top-level modules
          'composables',
          // ... or scan modules nested one level deep with a specific name and file extension
          'composables/*/index.{ts,js,mjs,mts}',
          // ... or scan all modules within given directory
          'composables/**'
      ]
  },
  router: {
    trailingSlash: false, // Set to true to enforce trailing slashes, false to remove them
  },
});