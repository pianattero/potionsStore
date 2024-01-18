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
        <div>
            <button>Prev</button>
            <button>Next</button>
        </div>
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import { onMounted } from 'vue';
import { ref } from 'vue';

import PotionCard from '../components/PotionCard.vue'
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

let postOnPage: number = 10
let start: number = 0;
let end = postOnPage

const data = potionsStore.potionsArr.slice(start, end)

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
