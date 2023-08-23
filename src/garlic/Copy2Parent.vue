<template>
    <span
        style="text-decoration: underline; cursor: pointer"
        @click="copy"
        v-text="target"
    ></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        target: {
            type: String,
            required: true,
        },
    },
    setup(props, context) {
        const copy = () => {
            context.emit('childEvent', props.target)
        }

        return {
            copy,
        }
    },
})
</script>
