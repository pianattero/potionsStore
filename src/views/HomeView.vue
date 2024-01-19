<template>
  <div class="home-container">
    <h1>Welcome to J. Pippins Official Potion Store!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium quo, ad quidem recusandae itaque, vero veniam reiciendis commodi provident corrupti. Error praesentium nisi odio perferendis rerum dolores at possimus doloremque numquam tempore atque corporis hic tenetur, quibusdam rem, ad consectetur. </p>
    <Button
    @click="potionsPg"
    :text="'Check out our available Potions!'"
    />
    <Button
    @click="spellsPg"
    :text="'Know everything about Spells!'"
    />
  </div>
</template>

<script setup lang="ts">
  //IMPORTS
  import { useRouter } from 'vue-router';
  import Button from '@/components/core/Button.vue';

  //HOOKS
  const router = useRouter();

  //METHODS
  const potionsPg = () => {
    router.push('/potions')
  };
  const spellsPg = () => {
    router.push('/spells')
  };

</script>

<style scoped lang="scss">
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>