<template>
    <span
        style="text-decoration: underline; cursor: pointer"
        @click="copy"
        v-text="target"
    ></span>
    <span v-if="showCopy">copy</span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useClipboard from 'vue-clipboard3'

export default defineComponent({
    props: {
        target: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const showCopy = ref(false)
        const { toClipboard } = useClipboard()
        
        const copy = async () => {
            try {
                await toClipboard(props.target)
                showCopy.value = true
                setTimeout(() => {
                    showCopy.value = false
                }, 300)
            } catch (e) {
                console.error(e)
            }
        }
        
        return {
            showCopy,
            copy,
        }
    },
})
</script>