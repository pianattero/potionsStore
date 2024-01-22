import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
      amount: 0,
    }),
    getters: {
    
    },
    actions: {
      increment() {
        this.amount++;
      },
      decrease() {
        this.amount--;
      },
    },
});