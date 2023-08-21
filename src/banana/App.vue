<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray;">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-3 is-offset-1"><simple-counter></simple-counter></div>
            </div>
            <div class="columns">
                <div class="column is-3 is-offset-1"><simple-counter></simple-counter></div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <input-keyword></input-keyword>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputKeyword from './InputKeyword.vue'
import SimpleCounter from './SimpleCounter.vue'


export default defineComponent({
    components: {
        InputKeyword,
        SimpleCounter,
    },
})
</script>
