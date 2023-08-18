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

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStoreCounter } from './store/counter'

const { count }  = storeToRefs(useStoreCounter())
const { increment, decrement } = useStoreCounter()
</script>