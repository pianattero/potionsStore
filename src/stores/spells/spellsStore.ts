import { defineStore } from 'pinia';

import { SpellsService } from '@/services/spells/spellsService';
import { type SpellData } from '@/types/spells.types';

export const useSpellStore = defineStore({
    id: 'spells',
    state: () => ({
        spellsService: SpellsService.getInstance(),
        spellsArr: [] as SpellData[],
    }),
    getters: {

    },
    actions: {
        async getSpells() {
            return await this.spellsService
                .getSpells()
                .then((res: any) => {
                    if (res && res.data) {
                        this.spellsArr = res.data
                        return this.spellsArr
                    }
                })
        }

    }

})