<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <drop-zone></drop-zone>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DropZone from './DropZone.vue'

export default defineComponent({
    components: {
        DropZone,
    },
})
</script>
