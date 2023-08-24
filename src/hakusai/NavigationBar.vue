<template>
    <nav class="navbar is-fixed-top">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <svg viewBox="0 0 24 24" width="24" height="24" style="fill: gray">
                    <use href="#chevron-left-circle" />
                </svg>
            </a>
            <div class="navbar-item">
                <div class="tabs">
                    <ul>
                        <li v-bind:class="{ 'is-active': pageActive1 }">
                            <router-link to="/apple">Apple</router-link>
                        </li>
                        <li v-bind:class="{ 'is-active': pageActive2 }">
                            <router-link to="/bacon">Bacon</router-link>
                        </li>
                        <li v-bind:class="{ 'is-active': pageActive3 }">
                            <router-link to="/candy">Candy</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageActive1 = computed(() => route.name === '1')
const pageActive2 = computed(() => route.name === '2')
const pageActive3 = computed(() => route.name === '3')
</script>