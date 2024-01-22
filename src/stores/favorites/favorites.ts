import type { PotionData } from "@/types/potions.types";
import { defineStore } from "pinia";

export const useFavoritestore = defineStore({
  id: "favorites",
  state: () => ({
    favorites: [] as PotionData[],
  }),
  actions: {
    addFav(potion: any) {
      this.favorites.push(potion);
      return this.favorites;
    },
    removeFav(id: string) {
      this.favorites = this.favorites.filter((item) => item.id !== id);
      return this.favorites;
    },
    findFav(id: string) {
      if (this.favorites.find((item) => item.id === id)) {
        return true;
      } else {
        return false;
      }
    },
  },
  persist: true,
});
