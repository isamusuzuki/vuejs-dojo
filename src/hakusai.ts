import { createApp } from "vue"
import App from './hakusai/App.vue'
import router from './hakusai/router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')