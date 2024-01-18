<template>
    <h1>SPELLS</h1>
</template>

<script setup lang="ts">
//IMPORTS
import { onMounted } from 'vue';
import { useSpellStore } from '../stores/spells/spellsStore';

//STORES
const spellsStore = useSpellStore()

//HOOKS
onMounted(() => {
    spellsStore.getSpells()
})
</script>

<style scoped lang="scss">

</style>