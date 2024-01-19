<template>
    <div class="card-container">
        <div class="card-info">
            <h1 class="card-title">{{ spells?.attributes?.name }}</h1>
            <h3>Category: {{ spells?.attributes?.category || 'Unknown' }}</h3>
            <p>{{ spells?.attributes?.effect || missingInfoMSG }}</p>
        </div>
        <img :src='spells?.attributes?.image || "/missing_spell.png"' />
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import type { PropType } from 'vue';
import { type SpellData } from '@/types/spells.types'

//PROPS
const props = defineProps({
    spells: {
        type: Object as PropType<SpellData>
    }
});

//DATA
const missingInfoMSG = "We don't count with that information yet, stay tuned!"

</script>

<style scoped lang="scss">

.card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 15px;
    border: 2px black double;

    .card-info {
        margin-right: 20px;
    }

    img {
        width: 200px;
    }
}

</style>