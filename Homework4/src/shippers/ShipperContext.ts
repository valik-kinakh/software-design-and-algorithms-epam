import {
  AirEastShipper,
  ChicagoSprintShipper,
  PacificParcelShipper,
  Shipper,
} from "./Shipper";

export class ShipperContext {
  private weight: number;
  private fromZipcode: string;
  private shippingStrategy: Shipper;

  constructor(weight, fromZipcode) {
    this.weight = weight;
    this.fromZipcode = fromZipcode;
    this.setShippingStrategy();
  }

  private setShippingStrategy(): void {
    const { weight, fromZipcode } = this;
    switch (Number(fromZipcode[0])) {
      case 1:
      case 2:
      case 3:
        this.shippingStrategy = new AirEastShipper(weight);
        break;
      case 4:
      case 5:
      case 6:
        this.shippingStrategy = new ChicagoSprintShipper(weight);
        break;
      case 7:
      case 8:
      case 9:
        this.shippingStrategy = new PacificParcelShipper(weight);
        break;
      default:
        throw new Error("Not valid zip code");
    }
  }

  public getCost() {
    return this.shippingStrategy.getCost();
  }
}
