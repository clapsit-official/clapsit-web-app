//@ts-nocheck
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-13',
  devtools: { enabled: true },
  // @ts-ignore
  app: {
      head: {
          meta: [
              {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
              }
          ],
          title: "Clapsit | A new perspective"
      },
  },

  // @ts-ignore
  devServer: {
      port: process.env.NUXT_APP_PORT || 3000,
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
    '~/assets/stylesheets/colors/dark-colorblind.scss',
    '~/assets/stylesheets/colors/light-colorblind.scss',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  plugins: [],
  build: {},
  modules: ['@pinia/nuxt', '@nuxt/devtools', 'nuxt-monaco-editor', '@nuxtjs/color-mode'],
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
  runtimeConfig: {
    href: process.env.ENDPOINT_HREF || undefined,
    base: process.env.ENDPOINT_BASE || undefined,
    version: process.env.ENDPOINT_VERSION || undefined,
    port: process.env.ENDPOINT_PORT || undefined,
    public: {
      href: process.env.ENDPOINT_HREF || undefined,
      base: process.env.ENDPOINT_BASE || undefined,
      version: process.env.ENDPOINT_VERSION || undefined,  
      port: process.env.ENDPOINT_PORT || undefined,
    }
  }
});