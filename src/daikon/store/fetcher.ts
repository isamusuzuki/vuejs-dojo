import { defineStore } from 'pinia'

export const useStoreFetcher = defineStore('fetcher', {
    state: () => ({
        loadingActive: false,
        modalActive: false,
        modalSuccess: false,
        modalTitle: '',
        modalBody: '', 
    }),
    actions: {
        openLoading() {
            this.loadingActive = true
        },
        closeLoading() {
            this.loadingActive = false
        },
        openModal(success: boolean, title: string, body: string) {
            this.modalSuccess = success
            this.modalTitle = title
            this.modalBody = body
            this.modalActive = true
        },
        closeModal() {
            this.modalSuccess = false
            this.modalTitle = ''
            this.modalBody = ''
            this.modalActive = false
        }
    }
})