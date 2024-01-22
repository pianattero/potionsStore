import { defineStore } from "pinia";

import { PotionsService } from "@/services/potions/potionsService";
import { type PotionData } from "@/types/potions.types";

export const usePotionsStore = defineStore({
  id: "potions",
  state: () => ({
    potionsService: PotionsService.getInstance(),
    potionsArr: [] as PotionData[],
  }),
  getters: {},
  actions: {
    async getPotions() {
      return await this.potionsService.getPotions().then((res: any) => {
        if (res && res.data) {
          this.potionsArr = res.data.data;
          return this.potionsArr;
        }
      });
    },
  },
  persist: true,
});
