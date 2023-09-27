import './styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppLink from '@/components/AppLink.vue'

const app = createApp(App)

app.component('AppLink', AppLink) // global component
app.use(router)

app.mount('#app')
