<template>
    <div>
        <Heather/>
        <div class="container">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import { RouterView } from 'vue-router';
import Heather from '@/components/Heather.vue';
</script>

<style scoped lang="scss">
.container {
    display: flex;
    width: 100%;
    min-height: calc(100vh - 112.5px);
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>