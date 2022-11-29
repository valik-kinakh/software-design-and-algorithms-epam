import {
  AirEastShipper,
  ChicagoSprintShipper,
  PacificParcelShipper,
  Shipper,
} from "./Shipper";
import { ShipmentsEnum } from "../enums/shipmentsEnum";

export class ShipperContext {
  private weight: number;
  private fromZipcode: string;
  private shippingStrategy: Shipper;
  private type: ShipmentsEnum;

  constructor(weight, fromZipcode, type) {
    this.weight = weight;
    this.fromZipcode = fromZipcode;
    this.type = type;
    this.setShippingStrategy();
  }

  private setShippingStrategy(): void {
    const { weight, fromZipcode, type } = this;
    switch (Number(fromZipcode[0])) {
      case 1:
      case 2:
      case 3:
        this.shippingStrategy = new AirEastShipper(weight, type);
        break;
      case 4:
      case 5:
      case 6:
        this.shippingStrategy = new ChicagoSprintShipper(weight, type);
        break;
      case 7:
      case 8:
      case 9:
        this.shippingStrategy = new PacificParcelShipper(weight, type);
        break;
      default:
        throw new Error("Not valid zip code");
    }
  }

  public getCost() {
    return this.shippingStrategy.getCost();
  }
}
