// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  modules: [
      'nuxt-quasar-ui'
  ],
  devtools: { enabled: true },
  alias: {
    '#d': path.resolve(__dirname, './assets/domain'),
    '#s': path.resolve(__dirname, './assets/style'),
    '#c': path.resolve(__dirname, './components')
  },
  css: ['~/assets/style/style.css'],
  quasar: {},
})
