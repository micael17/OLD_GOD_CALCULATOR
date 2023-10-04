// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  modules: [
      'nuxt-quasar-ui'
  ],
  quasar: {},
  devtools: { enabled: true },
  alias: {
    '#d': path.resolve(__dirname, './assets/domain'),
    '#s': path.resolve(__dirname, './assets/style')
  }
})
