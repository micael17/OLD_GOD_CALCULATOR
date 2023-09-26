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
const app = createApp(App)
app.use(Quasar, {})
app.use(router)
app.use(pinia)

app.mount('#root')