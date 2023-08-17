<template>
    <a href="/">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="gray"
        >
            <title>chevron-left-circle</title>
            <path
                d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z"
            />
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SimpleCounter from './SimpleCounter.vue'

export default defineComponent({
    components: {
        SimpleCounter,
    },
})
</script>
