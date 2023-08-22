<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray;">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-3 is-offset-1"><store-counter></store-counter></div>
            </div>
            <div class="columns">
                <div class="column is-3 is-offset-1"><store-counter></store-counter></div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-1">
                    <input-keyword></input-keyword>
                    <output-keyword></output-keyword>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputKeyword from './InputKeyword.vue'
import OutputKeyword from './outputKeyword.vue'
import StoreCounter from './StoreCounter.vue'

export default defineComponent({
    components: {
        InputKeyword,
        OutputKeyword,
        StoreCounter,
    },
})
</script>
