<template>
    <nav class="level">
        <div class="level-left">
            <button class="level-item button is-outlined" @click="decrement">
                -
            </button>
            <span class="level-item is-size-3" v-text="count" />
            <button class="level-item button is-outlined" @click="increment">
                +
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const count = ref(0)

        const increment = () => {
            count.value += 1
        }
        const decrement = () => {
            count.value -= 1
        }

        return {
            count,
            increment,
            decrement,
        }
    },
})
</script>
