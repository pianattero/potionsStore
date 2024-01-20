<template>
    <div class="card-description">
        <h4>{{ props.title }}</h4>
        <span>{{ props.description }}</span>
        <hr>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
    type: String,
    },
    description: {
    type: String,
    default: 'Not information found.'
    },
 });
</script>

<style scoped lang="scss">
    .card-description {
        text-align: center;
        margin: 10px 0;
        padding: 5px;
        h4 {
            font-weight: bold;
        }
    }
</style>