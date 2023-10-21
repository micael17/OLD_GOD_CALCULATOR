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
      script: [{ //구글 애널리틱스 설정
        async: true,
        src: analyticsSrc
      }, {
        innerHTML : analyticsScript
      }, { // 구글 애드센스 실행
        defer: true,
        src: '/GoogleAds.ts'
      }],
      meta: [{ //구글 애드센스 인식시키기
        name: 'google-adsense-account',
        content: 'ca-pub-9353405093450953'
      }]
    }
  }
})

