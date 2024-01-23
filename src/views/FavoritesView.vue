<template>
  <div class="container">
    <h1>Favorites</h1>
    <p v-if="favorites.length === 0">No favorites</p>
    <div v-else class="container-list">
      <div
        class="container-list-fav"
        v-for="favorite in favorites"
        :key="favorite.id"
      >
        <h2>{{ favorite?.attributes?.name }}</h2>
        <div>
          <Button
            :text="'Remove'"
            @click="favoritesStore.removeFav(favorite.id)"
          />
        </div>
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
  h1 {
    margin-bottom: $margin-bottom-title;
    margin-top: $margin-top-title;
    text-align: center;
  }
  .container-list {
    width: 100%;
    text-align: left;
    @include flex(column, nowrap, center, center);

    .container-list-fav {
      @include flex(row, nowrap, space-between, center);
      border: $border;
      border-radius: $border-radius;
      width: 70%;
      margin: 0 1rem 1rem;
      padding: 0.7rem;

      @include media-670(){
        @include flex(column, nowrap, center, center);

        h2 {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>
