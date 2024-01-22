<template>
  <h1>Favorites</h1>
  <div class="container">
    <p v-if="favorites.length === 0">No favorites</p>
    <div v-else class="container-list">
      <div
        class="container-list-fav"
        v-for="favorite in favorites"
        :key="favorite.id"
      >
        <h2>{{ favorite?.attributes?.name }}</h2>
        <Button
          :text="'Remove'"
          @click="favoritesStore.removeFav(favorite.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//IMPORTS
import { useFavoritestore } from "@/stores/favorites/favorites";
import { storeToRefs } from "pinia";

//STORES
const favoritesStore = useFavoritestore();
// - Favorites
const { favorites } = storeToRefs(favoritesStore);
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.container {
  .container-list {
    width: 100%;
    text-align: left;
    @include flex(column, nowrap, center, center);

    .container-list-fav {
      @include flex(row, nowrap, space-between, center);
      width: 70%;
      margin: 10px 0;
    }
  }
}
</style>
