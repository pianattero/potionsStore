<template>
    <div class="container">
        <Heather/>
        <div class="container-content">
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
    display: block;
    position: relative;

    .container-content {
        width: 100%;
        height: calc(100vh - 112.5px);
        position: fixed;
        overflow: scroll;
        bottom: 0;
        left: 0;
    }
}
</style>