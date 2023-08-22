<template>
    <div class="field">
        <label class="label">キーワード</label>
        <div class="control">
            <input class="input" type="text" placeholder="何か入力してください" v-model="keyword" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStoreKeyword } from './store/keyword'

const { keyword } = storeToRefs(useStoreKeyword())
</script>