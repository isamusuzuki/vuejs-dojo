<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="gray">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <fake-button></fake-button>
        </div>
    </section>
    <now-loading></now-loading>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FakeButton from './FakeButton.vue'
import NowLoading from './NowLoading.vue'

export default defineComponent({
    components: {
        FakeButton,
        NowLoading
    }
})
</script>
