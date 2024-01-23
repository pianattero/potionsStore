import { defineStore } from "pinia";
import type { PotionData } from "@/types/potions.types";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [] as PotionData[],
  }),
  getters: {},
  actions: {
    addToCart(potion: any) {
      this.cart.push(potion);
      return this.cart;
    },
    removeOfCart(id: string) {
      this.cart = this.cart.filter((item) => item.id !== id);
      return this.cart;
    },
    findInCart(id: string) {
      if (this.cart.find((item) => item.id === id)) {
        return true;
      } else {
        return false;
      }
    },
  },
  persist: true,
});
