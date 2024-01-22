import { type AxiosResponse } from "axios";
import { HTTPBaseService } from '@/services/HTTPBaseService'

export class SpellsService extends HTTPBaseService {

    private static classInstance?: SpellsService
 
    constructor() {
        super()
    }
 
    public static getInstance(): SpellsService {
        if (!this.classInstance) {
            this.classInstance = new SpellsService()
        }
 
        return this.classInstance
    };

    public getSpells = async (): Promise<AxiosResponse> => {
        return await this.instance.get('/spells')
    };
}