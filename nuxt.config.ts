// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  ssr: false,
  app: {
    baseURL: '/<repository-name>/',  // замените <repository-name> на имя вашего репо
    buildAssetsDir: 'assets',        // не начинайте с "_" чтобы избежать конфликтов с .nojekyll
  },
  // plugins: ['~/plugins/locomotive.client.js'],
  typescript: {
    typeCheck: true
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['nuxt-swiper', '@nuxt/icon',],

})