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
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from './store'

export default defineComponent({
    setup() {
        const store = useStore(key)

        const count = computed(() => store.state.count)

        const increment = () => {
            store.commit('increment')
        }
        const decrement = () => {
            store.commit('decrement')
        }

        return {
            count,
            increment,
            decrement,
        }
    },
})
</script>