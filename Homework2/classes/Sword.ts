// your code goes here

import {Weapon} from "./Weapon";

export class Sword extends Weapon{

    // constructor
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super("sword", baseDamage, baseDurability, value, weight);
    }

    polish():void {
       if (this.damageModifier < 1.25) this.damageModifier += Sword.MODIFIER_CHANGE_RATE;
       this.setDamage();
    }

}
