import { createApp } from "vue"

import App from './coconut/App.vue'

import { store, key } from './coconut/store'

const app = createApp(App)

app.use(store, key)

app.mount('#app')