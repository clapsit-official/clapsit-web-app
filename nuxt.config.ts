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

  // vite: {
  //     css: {
  //         preprocessorOptions: {
  //             scss: {
  //                 additionalData:
  //                     '@import "assets/stylesheets/style";' +
  //                     '@import "assets/stylesheets/utilities/colors";' +
  //                     '@import "assets/stylesheets/utilities/configs";' +
  //                     '@import "assets/stylesheets/utilities/responsive";' +
  //                     '@import "assets/stylesheets/utilities/animations";' +
  //                     '@import "assets/stylesheets/utilities/fonts";'
  //             },
  //         }
  //     },
  // },

  // css: [
  //   "~/assets/stylesheets/primevue-sass/themes/mytheme/theme.scss",
  //   '@fontsource/roboto/100.css',
  //   '@fontsource/roboto/300.css',
  //   '@fontsource/roboto/400.css',
  //   '@fontsource/roboto/500.css',
  //   '@fontsource/roboto/700.css',
  //   '@fontsource/roboto/900.css'
  // ],
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