import './assets/main.css'
import './assets/css/colors.css'
import './assets/css/themes.css'
import './assets/css/toast.css'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Toast)

app.mount('#app')
