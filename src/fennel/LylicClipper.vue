<template>
    <div class="block">
        <div class="subtitle">以下のどれかをクリックします</div>
        
        <copy-2-clip target="僕たち男の子"></copy-2-clip>
        &nbsp;
        <copy-2-clip target="君たち女の子"></copy-2-clip>
        &nbsp;
        <copy-2-clip target="ヘイヘイヘイ ヘイヘイヘイ"></copy-2-clip>
        &nbsp;
        <copy-2-clip target="おいで遊ぼう僕らの世界へ"></copy-2-clip>
    </div>
    <div class="block" style="width: 600px">
        <div class="subtitle">以下にテキストカーソルを移してからペーストします</div>
        <textarea class="textarea" rows="6"></textarea>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Copy2Clip from './Copy2Clip.vue'

export default defineComponent({
    components: {
        Copy2Clip,
    },
})
</script>