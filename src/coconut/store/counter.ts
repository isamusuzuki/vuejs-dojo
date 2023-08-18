import { defineStore } from 'pinia'


export const useStoreCounter = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
})