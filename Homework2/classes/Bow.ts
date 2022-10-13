// your code goes here

import {Weapon} from "./Weapon";

export class Bow extends Weapon{
    //constructor
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super("bow", baseDamage, baseDurability, value, weight);
    }

    polish(): void {
        if (this.effectiveDurability < 1) {
            this.durabilityModifier += Bow.MODIFIER_CHANGE_RATE;
            this.setDurability();
        }
    }
}
