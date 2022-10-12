import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        const firstWeight = first.getWeight();
        const secondWeight = second.getWeight();

        if (firstWeight > secondWeight) return 1;
        else if (firstWeight < secondWeight) return -1;

        return first.compareTo(second);
    }
}
