export interface SpellData {
    id:         string;
    type:       Type;
    attributes: { [key: string]: null | string };
    links:      Links;
}

export interface Links {
    self: string;
}

export enum Type {
    Spell = "spell",
}