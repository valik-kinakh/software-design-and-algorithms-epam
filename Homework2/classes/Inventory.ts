// your code goes here

import {Item} from "./Item";
import {ItemComparator} from "./ItemComparator";

export class Inventory {
   private items: Item[];

   // methods
   public addItem(item: Item):void{
       this.items.push(item);
   }

   public sort();
   public sort(comparator: ItemComparator);

   public sort(comparator?: ItemComparator):Item[]{
       if (!comparator){
           return this.items.sort((item1,item2)=> item1.getValue() - item2.getValue());
       }

       return this.items.sort(comparator.compare);
   }

   public toString():string{
       return this.items.map(item=>item.toString()).join(', ');
   }
}
