<template>
    <div class="block">
        <div class="field is-grouped">
            <p class="control">
                <input class="input" type="text"
                    placeholder="日本語" v-model="newJapanese">
            </p>
            <p class="control">
                <input class="input" type="text"
                    placeholder="英語" v-model="newEnglish">
            </p>
            <p class="control">
                <button class="button is-info"
                    :disabled="buttonDisabled"
                    @click="addNewWord">追加
                </button>
            </p>
        </div>
    </div>
    <div class="table-container">
        <table class="table is-bordered is-narrow">
            <thead>
                <tr>
                    <th>日本語</th>
                    <th>英語</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(word, index) in words"
                    :key="word.japanese"
                    :index="index"
                >
                    <td>{{ word.japanese }}</td>
                    <td>{{ word.english }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTangoCho from './useTangoCho'

export default defineComponent({
    setup() {
        return {
            ...useTangoCho()
        }
    }
})
</script>