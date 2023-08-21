import { defineStore } from 'pinia'

export const useStoreFetcher = defineStore('fetcher', {
    state: () => ({
        loadingActive: false,
        modalActive: false,
        modalIcon: '',
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
            if (success) {
                this.modalIcon = '<svg viewBox="0 0 24 24" width="32" height="32" style="fill: limegreen;"><use href="#check-circle" /></svg>'
            } else {
                this.modalIcon = '<svg viewBox="0 0 24 24" width="32" height="32" style="fill: red;"><use href="#alert-circle" /></svg>'
            }
            this.modalTitle = title
            this.modalBody = body
            this.modalActive = true
        },
        closeModal() {
            this.modalIcon = ''
            this.modalTitle = ''
            this.modalBody = ''
            this.modalActive = false
        }
    }
})