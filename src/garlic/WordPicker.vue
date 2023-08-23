<template>
    <div class="block">
        <div class="subtitle">以下のどれかをクリックします</div>
        
        <copy-2-parent target="僕たち男の子" @childEvent="setKeyword"></copy-2-parent>
        &nbsp;
        <copy-2-parent target="君たち女の子" @childEvent="setKeyword"></copy-2-parent>
        &nbsp;
        <copy-2-parent target="ヘイヘイヘイ ヘイヘイヘイ" @childEvent="setKeyword"></copy-2-parent>
        &nbsp;
        <copy-2-parent target="おいで遊ぼう僕らの世界へ" @childEvent="setKeyword"></copy-2-parent>
    </div>
    <div class="block">
        <div class="field">
            <div class="label">
                <input
                    class="input"
                    type="text"
                    placeholder="入力不可、選択のみ可"
                    disabled
                    v-model="keyword"
                />
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
        const keyword = ref('')

        const setKeyword = (word: string) => {
            keyword.value = word
        }

        return {
            keyword,
            setKeyword,
        }
    },
})
</script>