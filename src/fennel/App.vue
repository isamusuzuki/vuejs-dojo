<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <lylic-clipper></lylic-clipper>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LylicClipper from './LylicClipper.vue'

export default defineComponent({
    components: {
        LylicClipper
    },
})
</script>
