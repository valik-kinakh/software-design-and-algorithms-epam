import { ShipOptions } from "../interfaces/ShipOptions";
import { ShipperContext } from "../shippers/ShipperContext";

export class Shipment {
  private shipmentID: number;
  private weight: number;
  private fromAddress: string;
  private toAddress: string;
  private fromZipCode: string;
  private toZipCode: string;
  private price: number;
  private shippingStrategy: ShipperContext;

  constructor(options: ShipOptions) {
    this.shipmentID = options.shipmentID ?? this.generateID();
    this.weight = options.weight;
    this.fromAddress = options.fromAddress;
    this.toAddress = options.toAddress;
    this.fromZipCode = options.fromZipCode;
    this.toZipCode = options.toZipCode;

    this.setShippingStrategy();
    this.price = this.shippingStrategy.getCost();
  }

  private generateID(): number {
    return Number((Math.random() * 100).toFixed(0));
  }

  private setShippingStrategy(): void {
    const { weight, fromZipCode } = this;
    this.shippingStrategy = new ShipperContext(weight, fromZipCode);
  }

  public getInstance(): Shipment {
    return this;
  }

  public getShipmentID() {
    return this.shipmentID;
  }

  public ship(): string {
    const { shipmentID, fromAddress, toAddress, price } = this;
    return `${shipmentID}, from:${fromAddress}, to:${toAddress}, ${price}$`;
  }

  //setters
  public setFromAddress(value: string) {
    this.fromAddress = value;

    return this;
  }

  public setToAddress(value: string) {
    this.toAddress = value;

    return this;
  }

  public setFromZipCode(value: string) {
    this.fromZipCode = value;

    return this;
  }

  public setToZipCode(value: string) {
    this.toZipCode = value;

    return this;
  }
}
