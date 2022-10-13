// your code goes here

import {Consumable} from "./Consumable";

export class Pizza extends Consumable{
    private numberOfSlices: number;
    private slicesEaten: number = 0;

    //constructor
    constructor(numberOfSlices: number, spoiled: boolean) {
        super("pizza",300, 1, spoiled);
        this.numberOfSlices = numberOfSlices;
    }

    protected eat(): string {
        if (this.slicesEaten < this.numberOfSlices){
            this.slicesEaten += 1;

            if (this.slicesEaten >= this.numberOfSlices){
                this.setConsumed(true);
            }

            return "You eat a slice of the pizza."
        }else {
            return "";
        }
    }
}
