<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <drop-zone></drop-zone>
    </section>
    <now-loading></now-loading>
    <result-modal></result-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DropZone from './DropZone.vue'
import NowLoading from './NowLoading.vue'
import ResultModal from './ResultModal.vue'


export default defineComponent({
    components: {
        DropZone,
        NowLoading,
        ResultModal,
    },
})
</script>
