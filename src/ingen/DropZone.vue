<template>
    <div
        class="box"
        @dragover.prevent="dragging(1)"
        @dragleave.prevent="dragging(0)"
        @drop.prevent="fileDropped"
        :class="{ 'has-background-grey-light': isDragging }"
    >
        <h1 class="title">ファイルアップロードのテスト</h1>
        <h2 class="subtitle">
            この枠にファイルをドラッグ＆ドロップ可能<br>
            開発サーバーで「アップロード」ボタンをクリックするとエラーになります
        </h2>
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <div class="file has-name">
                        <label class="file-label">
                            <input
                                class="file-input"
                                type="file"
                                name="file"
                                @change.prevent="fileSelected"
                            />
                            <span class="file-cta">
                                <span class="file-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        style="fill: black"
                                    >
                                        <use href="#upload" />
                                    </svg>
                                </span>
                                <span class="file-label">ファイルを選択</span>
                            </span>
                            <span class="file-name" style="width: 300px">
                                {{ selectedFilename }}
                            </span>
                        </label>
                    </div>
                </div>
                <div class="level-item">
                    <button
                        @click="fileUpload"
                        class="button is-primary"
                        :disabled="buttonDisabled"
                    >
                        アップロード
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useStoreLoading } from './store/loading'
import { useStoreModal } from './store/modal'

const storeLoading = useStoreLoading()
const storeModal = useStoreModal()

const targetFile: Ref<File | null> = ref(null)
const selectedFilename = ref('')
const buttonDisabled = ref(true)
const isDragging = ref(false)

const dragging = (n: number) => {
    if (n === 1) {
        isDragging.value = true
    } else {
        isDragging.value = false
    }
}

const fileSelected = (event: Event) => {
    const target = event.target as HTMLInputElement
    const files: FileList | null = target.files
    if (files && files.length > 0) {
        targetFile.value = files[0]
        selectedFilename.value = files[0].name
        buttonDisabled.value = false
    }
}

const fileDropped = (event: DragEvent) => {
    isDragging.value = false
    if (event.dataTransfer) {
        const files: FileList = event.dataTransfer.files
        if (files.length > 0) {
            targetFile.value = files[0]
            selectedFilename.value = files[0].name
            buttonDisabled.value = false
        }
    }
}

const fileUpload = () => {
    if (targetFile.value) {
        storeLoading.openLoading()
        let formData = new FormData()
        formData.append('uploadFile', targetFile.value)        
        axios
            .post('/api/ingen/upload', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            .then((response) => {
                if (response.data.success) {
                    storeModal.openModal(true, '成功', response.data.message)
                } else {
                    storeModal.openModal(false, '失敗', response.data.message)
                }
                storeLoading.closeLoading()
            })
            .catch((error) => {
                storeModal.openModal(false, '失敗', error)
                storeLoading.closeLoading()
            })
    } else {
        storeModal.openModal(false, '失敗', 'ファイルを添付してください')
    }
}
</script>
