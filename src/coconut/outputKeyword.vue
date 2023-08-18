<template>
    <h1 class="title block">{{  keyword }}</h1>
    <h2 class="subtitle block">{{  reverse }}</h2>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStoreKeyword } from './store/keyword'

export default defineComponent({
    setup() {
        const storeKeyword = useStoreKeyword()

        const keyword = computed(() => storeKeyword.keyword)

        const reverse = computed(() => storeKeyword.reverse)

        return {
            keyword, reverse
        }
    }
})
</script>