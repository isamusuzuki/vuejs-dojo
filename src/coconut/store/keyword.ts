import { defineStore } from "pinia"

export const useStoreKeyword = defineStore('keyword', {
    state: () => ({
        keyword: ''
    }),
    getters : {
        reverse : (state) => state.keyword.split('').reverse().join('')
    }
})