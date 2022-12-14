import { ShipOptions } from "../interfaces/ShipOptions";
import { ShipperContext } from "../shippers/ShipperContext";
import { ShipmentsEnum } from "../enums/shipmentsEnum";

export abstract class Shipment {
  protected readonly shipmentID: number;
  protected weight: number;
  protected fromAddress: string;
  protected toAddress: string;
  protected fromZipCode: string;
  protected toZipCode: string;
  protected price: number;
  protected shippingStrategy: ShipperContext;
  protected type: ShipmentsEnum;

  protected constructor(options: ShipOptions) {
    this.shipmentID = options.shipmentID ?? this.generateID();
    this.weight = options.weight;
    this.fromAddress = options.fromAddress;
    this.toAddress = options.toAddress;
    this.fromZipCode = this.checkZipCode(options.fromZipCode);
    this.toZipCode = this.checkZipCode(options.toZipCode);
  }

  protected generateID(): number {
    return Number((Math.random() * 100).toFixed(0));
  }

  protected typeConstructor(): void {
    this.setShippingStrategy();
    this.price = this.shippingStrategy.getCost();
  }

  protected checkZipCode(zipCode: string) {
    if (zipCode.length > 5) throw new Error("Invalid zipcode");

    return zipCode;
  }

  protected setShippingStrategy(): void {
    const { weight, fromZipCode, type } = this;
    this.shippingStrategy = new ShipperContext(weight, fromZipCode, type);
  }

  public getInstance(): Shipment {
    return this;
  }

  public getShipmentID() {
    return this.shipmentID;
  }

  public ship(): string {
    const { shipmentID, fromAddress, toAddress, price } = this;
    return `Shipment with the ID ${shipmentID} will be picked up from ${fromAddress}, and shipped to ${toAddress}
Cost = ${price}$`;
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
    this.fromZipCode = this.checkZipCode(value);

    return this;
  }

  public setToZipCode(value: string) {
    this.toZipCode = this.checkZipCode(value);

    return this;
  }
}

export class Package extends Shipment {
  constructor(options) {
    super(options);
    this.type = ShipmentsEnum.PACKAGE;
    this.typeConstructor();
  }
}

export class Letter extends Shipment {
  constructor(options) {
    super(options);
    this.type = ShipmentsEnum.LETTER;
    this.typeConstructor();
  }
}

export class Oversize extends Shipment {
  constructor(options) {
    super(options);
    this.type = ShipmentsEnum.OVERSIZED;
    this.typeConstructor();
  }
}
