// your code goes here

import {Item} from "./Item";

export abstract class Consumable extends Item {
    protected consumed: boolean;
    protected spoiled: boolean;

    // constructor
    protected constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);

        this.spoiled = spoiled;
        this.consumed = false;
    }

    //setters
    public setConsumed(value: boolean): void{
        this.consumed = value;
    }

    //methods
    public use():string | void {
        if (!this.consumed && !this.spoiled){
            return this.eat();
        }

        const isBread:boolean = this.name === "bread";
        if (isBread && this.consumed){
            return "There is nothing left of the bread to consume.";
        }

        return "The consumable is consumed or spoiled";
    }

    protected eat():string{
        const isBread:boolean = this.name === "bread";
        if (isBread){
            return `You eat the bread.
            ${this.spoiled && "You feel sick."}`;
        }
        return `You eat ${this.name}`;
    }
}
