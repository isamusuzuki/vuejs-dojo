<template>
    <div class="modal" v-bind:class="{ 'is-active': loadingActive }">
        <div
            class="modal-background"
            style="background-color: rgba(10, 10, 0.6)"
        ></div>
        <div class="modal-content has-text-centered" style="width: 150px; height: 80px;">
            <div class="spinner-box">
                <div class="pulse-container">
                    <div class="pulse-bubble pulse-bubble-1"></div>
                    <div class="pulse-bubble pulse-bubble-2"></div>
                    <div class="pulse-bubble pulse-bubble-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStoreLoading } from './store/loading'

const { loadingActive } = storeToRefs(useStoreLoading())
</script>

<style>
@keyframes pulse {
    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: 0.25;
        transform: scale(0.75);
    }
}

.spinner-box {
    width: 150px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
}

.pulse-container {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pulse-bubble {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #bbb;
}

.pulse-bubble-1 {
    animation: pulse 0.4s ease 0s infinite alternate;
}

.pulse-bubble-2 {
    animation: pulse 0.4s ease 0.2s infinite alternate;
}

.pulse-bubble-3 {
    animation: pulse 0.4s ease 0.4s infinite alternate;
}
</style>
