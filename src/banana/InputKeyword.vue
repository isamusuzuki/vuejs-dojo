<template>
    <div class="field">
        <label class="label">キーワード</label>
        <div class="control">
            <input class="input" type="text" placeholder="何か入力してください" v-model="keyword" />
        </div>
    </div>
    <h1 class="title block">{{  keyword }}</h1>
    <h2 class="subtitle block">{{  reverse }}</h2>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const keyword = ref('')

const reverse = computed(() => keyword.value.split('').reverse().join(''))
</script>