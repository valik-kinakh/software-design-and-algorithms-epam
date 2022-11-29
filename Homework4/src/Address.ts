export class Address {
  private readonly state: string;
  private readonly city: string;
  private readonly street: string;

  constructor(state: string, city: string, street: string) {
    this.state = state;
    this.city = city;
    this.street = street;
  }

  public toString(): string {
    return `${this.state} ${this.city}, ${this.street}`;
  }
}
