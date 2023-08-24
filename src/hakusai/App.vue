<template>
    <navigation-bar></navigation-bar>
    <section class="section">
        <div class="container">
            <router-view></router-view>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './NavigationBar.vue'

export default defineComponent({
    components: {
        NavigationBar
    },
})
</script>