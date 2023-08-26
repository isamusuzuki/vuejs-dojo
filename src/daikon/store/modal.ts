import { defineStore } from 'pinia'

interface State {
    modalIcon: string
    modalTitle: string
    modalBody: string
    modalActive: boolean
}

export const useStoreModal = defineStore('modal', {
    state: (): State => {
        return {
            modalIcon: '',
            modalTitle: '',
            modalBody: '',
            modalActive: false,
        }
    },
    actions: {
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