<template>
    <div class="field mt-4">
        <button class="button is-primary is-large" @click="fake">クリック</button>
    </div>
</template>

<script setup lang="ts">
import { useStoreFetcher } from './store/fetcher'

const store = useStoreFetcher()

const fake = () => {
    console.log('fake')

    store.openLoading()
    setTimeout(() => {
        store.closeLoading()
        let num = Math.random()
        if (num > 0.333) {
            store.openModal(true, '成功', 'あなたの運勢は大吉です！')
        } else {
            store.openModal(false, '失敗', 'なんと、あなたの運勢は凶です')
        }
    }, 1000)
}
</script>
