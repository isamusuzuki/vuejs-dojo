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

<script lang="ts">
import { defineComponent } from 'vue'
import useDropZone from './useDropZone'

export default defineComponent({
    setup() {
        return {
            ...useDropZone()
        }
    }
})
</script>
