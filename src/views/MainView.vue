<template>
    <div>
        <Heather/>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import { RouterView } from 'vue-router';
import Heather from '@/components/Heather.vue';
</script>