<template>
    <div class="block">
        <div class="subtitle">以下のどれかをクリックします</div>
        
        <copy-2-parent target="僕たち男の子" @childEvent="addWord"></copy-2-parent>
        &nbsp;
        <copy-2-parent target="君たち女の子" @childEvent="addWord"></copy-2-parent>
        &nbsp;
        <copy-2-parent target="ヘイヘイヘイ ヘイヘイヘイ" @childEvent="addWord"></copy-2-parent>
        &nbsp;
        <copy-2-parent target="おいで遊ぼう僕らの世界へ" @childEvent="addWord"></copy-2-parent>
    </div>
    <div class="block" style="width: 600px">
        <div class="field">
            <div class="label">
                <textarea
                    class="textarea"
                    rows="6"
                    placeholder="入力不可、選択のみ可"
                    disabled
                    v-model="pasteOnly"
                ></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Copy2Parent from './Copy2Parent.vue'

export default defineComponent({
    components: {
        Copy2Parent,
    },
    setup() {
        const pasteOnly = ref('')

        const addWord = (word: string) => {
            if (pasteOnly.value === '') {
                pasteOnly.value = word
            } else {
                pasteOnly.value = pasteOnly.value + '\n' + word
            }
        }

        return {
            pasteOnly,
            addWord,
        }
    },
})
</script>