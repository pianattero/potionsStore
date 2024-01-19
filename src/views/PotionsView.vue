<template>
    <Loader v-if="loading" />
    <div v-else class="container">
        <h1>POTIONS</h1>
        <div class="container-cards">
            <PotionCard
            v-for="item in data"
            :potions="item"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import { onMounted } from 'vue';
import { ref } from 'vue';

import PotionCard from '../components/cards/PotionCard.vue'
import Loader from '../components/Loader.vue'
import { usePotionsStore } from '../stores/potions/potionsStore';

//STORES
const potionsStore = usePotionsStore()

//HOOKS
onMounted(() => {
    potionsStore.getPotions();
    setTimeout(() => {
        loading.value = false

    }, 2000)
})

//DATA
const cardsOnPage = ref(10 as Number)
const start = ref(0 as Number);
const end = ref(cardsOnPage)

const data = potionsStore.potionsArr

const loading = ref(true)

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

</style>
