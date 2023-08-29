<template>
    <div class="modal" v-bind:class="{ 'is-active': modalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <nav class="level">
                        <div class="level-left">
                            <div class="level-item">
                                <span v-html="modalIcon"></span>
                            </div>
                            <div class="level-item">
                                <span v-text="modalTitle"></span>
                            </div>
                        </div>
                    </nav>                    
                </p>
                <button aria-label="close" class="delete" v-on:click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <span v-text="modalBody"></span>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStoreModal } from './store/modal'

const { modalActive, modalIcon, modalTitle, modalBody } = storeToRefs(useStoreModal())

const { closeModal } = useStoreModal()

</script>