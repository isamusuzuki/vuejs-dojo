<template>
    <a href="/">
        <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray;">
            <use href="#chevron-left-circle" />
        </svg>
    </a>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-1">
                    <fake-button></fake-button>
                </div>
            </div>
        </div>
    </section>
    <now-loading></now-loading>
    <result-modal></result-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FakeButton from './FakeButton.vue'
import NowLoading from './NowLoading.vue'
import ResultModal from './ResultModal.vue'

export default defineComponent({
    components: {
        FakeButton,
        NowLoading,
        ResultModal,
    }
})
</script>
