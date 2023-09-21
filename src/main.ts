import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from '@/App.vue'
import router from '@/router/routes'

/* 스타일 */
import '@quasar/extras/material-icons/material-icons.css' // Import icon libraries
import 'quasar/src/css/index.sass' // Import Quasar css
import '@/assets/style/style.css'

const pinia = createPinia()
const myApp = createApp(App)
myApp.use(Quasar, {})
myApp.use(router)
myApp.use(pinia)

myApp.mount('#app')
