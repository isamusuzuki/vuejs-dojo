<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="gray">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-3 is-offset-1">
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
            </div>
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
