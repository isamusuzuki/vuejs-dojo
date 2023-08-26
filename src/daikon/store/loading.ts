import { defineStore } from 'pinia'

export const useStoreLoading = defineStore('loading', {
    state: () => ({
        loadingActive: false,
    }),
    actions: {
        openLoading() {
            this.loadingActive = true
        },
        closeLoading() {
            this.loadingActive = false
        },
    }
})