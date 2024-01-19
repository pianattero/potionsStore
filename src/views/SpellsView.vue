<template>
    <Loader v-if="loading" />
    <div v-else>
        <h1>SPELLS</h1>
        <SpellsCard
        v-for="item in data"
        :spells="item"
        />
    </div>
</template>

<script setup lang="ts">
//IMPORTS
import { onMounted, ref } from 'vue';

import { useSpellStore } from '../stores/spells/spellsStore';
import SpellsCard from '@/components/cards/SpellsCard.vue'
import Loader from '@/components/Loader.vue';

//STORES
const spellsStore = useSpellStore()

//HOOKS
onMounted(() => {
    spellsStore.getSpells()
    setTimeout(() => {
        loading.value = false
        console.log(data)
    }, 2000);
});

//DATA
const loading = ref(true)
const data = spellsStore.spellsArr
</script>

<style scoped lang="scss">

</style>