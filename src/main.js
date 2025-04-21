import '@/main.css'
import App from '@/App.vue'
import { createApp } from 'vue'
import routes from '@/route/index.js'
import { MotionPlugin } from '@vueuse/motion'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.mount('#app')
