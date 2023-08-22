<template>
    <h1 class="title block">{{  keyword }}</h1>
    <h2 class="subtitle block">{{  reverse }}</h2>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStoreKeyword } from './store/keyword'

const storeKeyword = useStoreKeyword()
const keyword = computed(() => storeKeyword.keyword)
const reverse = computed(() => storeKeyword.reverse)
</script>