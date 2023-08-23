<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <div class="box">
                <h1 class="title is-size-5">単語帳</h1>
                <tango-cho></tango-cho>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TangoCho from './TangoCho.vue'

export default defineComponent({
    components: {
        TangoCho,
    },
})
</script>
