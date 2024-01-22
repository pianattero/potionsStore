k
<template>
  <Loader v-if="loading" />
  <div v-else>
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

<style scoped lang="scss"></style>
