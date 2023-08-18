<template>
    <div class="field">
        <label class="label">キーワード</label>
        <div class="control">
            <input class="input" type="text" placeholder="何か入力してください" v-model="keyword" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useStoreKeyword } from './store/keyword'

export default defineComponent({
    setup() {
        const { keyword } = storeToRefs(useStoreKeyword())

        return {
            keyword
        }
    }
})
</script>