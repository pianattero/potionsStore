export interface PotionsArray {
    data:  PotionData[];
}

export interface PotionData {
    id:         string;
    type:       PotionType;
    attributes: { [key: string]: null | string };
    links:      PotionLinks;
}

export interface PotionLinks {
    self: string;
}

export enum PotionType {
    Potion = "potion",
}