<template>
    <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="gray">
            <title>chevron-left-circle</title>
            <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <nav class="level">
                <div class="level-left">
                    <button
                        class="level-item button is-outlined"
                        @click="decrement"
                    >
                        -
                    </button>
                    <span class="level-item is-size-3" v-text="count" />
                    <button
                        class="level-item button is-outlined"
                        @click="increment"
                    >
                        +
                    </button>
                </div>
            </nav>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
    count.value += 1
}
const decrement = () => {
    count.value -= 1
}
</script>
