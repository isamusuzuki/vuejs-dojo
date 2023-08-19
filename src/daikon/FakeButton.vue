<template>
    <div class="field mt-4">
        <button class="button is-primary" @click="fake">クリック</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStoreFetcher } from './store/fetcher'

export default defineComponent({
    setup() {
        const store = useStoreFetcher()

        const fake = () => {
            console.log('fake')
            
            store.openLoading()
            setTimeout(() => {
                store.closeLoading()
            }, 3000)


        }
        return {
            fake
        }
    },
})
</script>