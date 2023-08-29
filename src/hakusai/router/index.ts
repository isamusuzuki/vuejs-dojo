import { createRouter, createWebHashHistory } from 'vue-router'
import ApplePage from '../pages/ApplePage.vue'
import BeefPage from '../pages/BeefPage.vue'
import CandyPage from '../pages/CandyPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/apple' },
        { path: '/apple', name: '1', component: ApplePage },
        { path: '/beef', name: '2', component: BeefPage },
        { path: '/candy', name: '3', component: CandyPage },
    ]
})