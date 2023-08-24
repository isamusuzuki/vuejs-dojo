import { createRouter, createWebHashHistory } from 'vue-router'
import ApplePage from '../pages/ApplePage.vue'
import BaconPage from '../pages/BaconPage.vue'
import CandyPage from '../pages/CandyPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/apple' },
        { path: '/apple', name: '1', component: ApplePage },
        { path: '/bacon', name: '2', component: BaconPage },
        { path: '/candy', name: '3', component: CandyPage },
    ]
})