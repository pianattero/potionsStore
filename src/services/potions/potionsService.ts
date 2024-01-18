import { type AxiosResponse } from "axios";
import { HTTPBaseService } from '@/services/HTTPBaseService'


export class PotionsService extends HTTPBaseService {

    private static classInstance?: PotionsService
 
    constructor() {
        super()
    }
 
    public static getInstance(): PotionsService {
        if (!this.classInstance) {
            this.classInstance = new PotionsService()
        }
 
        return this.classInstance
    };

    public getPotions = async (): Promise<AxiosResponse> => {
        return await this.instance.get('/potions')
    };
};