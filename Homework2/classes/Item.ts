import { Comparable } from "./Comparable";

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
  protected static numberOfItems: number;

  protected id: number;
  protected name: string;
  protected value: number;
  protected weight: number;

  //constructor
  protected constructor(name: string, value: number, weight: number) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.weight = weight;

    id += 1;
    counter += 1;
    Item.numberOfItems = counter;
  }

  //static methods
  public static reset(): void {
    counter = 0;
  }

  //getters
  public getId(): number {
    return this.id;
  }

  public static getNumberOfItems(): number {
    return Item.numberOfItems;
  }

  public getValue(): number {
    return this.value;
  }

  public getName(): string {
    return this.name;
  }

  public getWeight(): number {
    return this.weight;
  }

  //setters
  public setValue(price: number): void {
    this.value = price;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  //methods
  public use(): void {}

  public compareTo(other: Item): number {
    const thisValue = this.value;
    const otherValue = other.getValue();

    if (thisValue > otherValue) return 1;
    else if (thisValue < otherValue) return -1;

    const thisName = this.name.toLowerCase();
    const otherName = this.getName().toLowerCase();

    return thisName.localeCompare(otherName);
  }

  public toString() {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }
}
