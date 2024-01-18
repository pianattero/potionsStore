<template>
    <div class="container">
        <h1>POTIONS</h1>
        <div class="container-cards">
            <PotionCard/>
            <PotionCard/>
            <PotionCard/>

        </div>
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import PotionCard from '../components/PotionCard.vue'

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
