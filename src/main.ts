import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from '@/App.vue'
import router from '@/router/routes'

const pinia = createPinia()
const myApp = createApp(App)
myApp.use(Quasar, {})
myApp.use(router)
myApp.use(pinia)

myApp.mount('#app')
