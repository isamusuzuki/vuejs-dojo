<template>
    <div class="field mt-4">
        <button class="button is-primary is-large" @click="fake">クリック</button>
    </div>
</template>

<script setup lang="ts">
import { useStoreLoading } from './store/loading'
import { useStoreModal } from './store/modal'

const storeLoading = useStoreLoading()
const storeModal = useStoreModal()

const fake = () => {
    console.log('fake')

    storeLoading.openLoading()
    setTimeout(() => {
        storeLoading.closeLoading()
        let num = Math.random()
        if (num > 0.333) {
            storeModal.openModal(true, '成功', 'あなたの運勢は大吉です！')
        } else {
            storeModal.openModal(false, '失敗', 'なんと、あなたの運勢は凶です')
        }
    }, 1000)
}
</script>
