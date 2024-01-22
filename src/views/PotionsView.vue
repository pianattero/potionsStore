<template>
  <Loader v-if="loading" />
  <div v-else class="container">
    <h1>POTIONS</h1>

    <div class="container-cards">
      <PotionCard v-for="item in potionsStore.potionsArr" :potions="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
//IMPORTS
import { onMounted } from "vue";
import { ref } from "vue";
import PotionCard from "@/components/cards/PotionCard.vue";
import { usePotionsStore } from "../stores/potions/potionsStore";

//STORES
const potionsStore = usePotionsStore();

//HOOKS
onMounted(() => {
  potionsStore.getPotions();
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});

//DATA
const loading = ref(true);
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";
.container {
  @include flex(column, nowrap, center, center);

  .container-cards {
    @include flex(row, wrap, center, none);
  }
}
</style>
