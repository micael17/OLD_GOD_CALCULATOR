// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

const analyticsSrc = 'https://www.googletagmanager.com/gtag/js?id=G-EX6TE4V1W3'
const analyticsScript = '' +
  'window.dataLayer = window.dataLayer || [];\n' +
  '  function gtag(){dataLayer.push(arguments);}\n' +
  '  gtag(\'js\', new Date());\n' +
  '\n' +
  '  gtag(\'config\', \'G-EX6TE4V1W3\');'

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
  app: {
    head: {
      script: [{
        async: true,
        src: analyticsSrc
      }, {
        innerHTML : analyticsScript
      }]
    }
  }
})

