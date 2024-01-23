k
<template>
  <Loader v-if="loading" />
  <div v-else class="container">
    <h1>SPELLS</h1>
    <SpellsCard v-for="item in spellsStore.spellsArr" :spells="item" />
  </div>
</template>

<script setup lang="ts">
//IMPORTS
import { onMounted, ref } from "vue";

import { useSpellStore } from "../stores/spells/spellsStore";
import SpellsCard from "@/components/cards/SpellsCard.vue";

//STORES
const spellsStore = useSpellStore();

//HOOKS
onMounted(() => {
  spellsStore.getSpells();
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});

//DATA
const loading = ref(true);
</script>

<style scoped lang="scss">
.container {
  h1 {
    margin-bottom: $margin-bottom-title;
    margin-top: $margin-top-title;
    text-align: center;
  }
}
</style>
