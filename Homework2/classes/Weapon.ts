// your code goes here

import {Item} from "./Item";

export abstract class Weapon extends Item {
    protected static MODIFIER_CHANGE_RATE = 0.05;

    protected baseDamage: number = 0;
    protected damageModifier: number = 0.05;
    protected effectiveDamage: number = this.baseDamage + this.damageModifier;
    protected baseDurability: number = 0;
    protected durabilityModifier: number = 0.05;
    protected effectiveDurability = this.baseDurability + this.durabilityModifier;

    // constructor
    protected constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);

        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    //getters
    public getDamage(): number {
        const toFixed = Number(this.effectiveDamage).toFixed(2);
        return +toFixed;
    }

    public getDurability(): number {
        const toFixed = Number(this.effectiveDurability).toFixed(2);
        return +toFixed;
    }

    // methods
    public polish(): void {

    }

    public use(): string {
        let breakDownMessage: string = "";

        if (this.effectiveDurability <= 0){
            breakDownMessage = ` The ${this.name} breaks.`
        }else {
            this.effectiveDurability -= Weapon.MODIFIER_CHANGE_RATE;
        }

        if (this.name === "Hammer" && breakDownMessage){
            return "You can't use the hammer, it is broken.";
        }

        return `You use the ${this.name}, dealing ${this.effectiveDamage} points of damage.${breakDownMessage}`;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}`
    }
}
