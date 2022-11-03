import { ShipOptions } from "./interfaces/ShipOptions";
import {
  AirEastShipper,
  ChicagoSprintShipper,
  PacificParcelShipper,
  Shipper,
} from "./shippers/Shipper";

export class Shipment {
  private static shipment: Shipment;
  private static IS_INITIALISE_CALLED = false;

  private shipmentID: number;
  private weight: number;
  private fromAddress: string;
  private toAddress: string;
  private fromZipCode: string;
  private toZipCode: string;
  private price: number;
  private shippingStrategy: Shipper;

  private constructor() {
    this.shipmentID = 0;
    this.weight = 0;
    this.fromAddress = "";
    this.toAddress = "";
    this.fromZipCode = "";
    this.toZipCode = "";
    this.price = 0;
  }

  private generateID(): number {
    return Number((Math.random() * 100).toFixed(0));
  }

  private static initialiseBaseInstance(): void {
    if (!Shipment.shipment) {
      Shipment.shipment = new Shipment();
    }
  }

  private static setShippingStrategy(): void {
    const { weight, fromZipCode } = Shipment.shipment;
    switch (Number(fromZipCode[0])) {
      case 1:
      case 2:
      case 3:
        Shipment.shipment.shippingStrategy = new AirEastShipper(weight);
        break;
      case 4:
      case 5:
      case 6:
        Shipment.shipment.shippingStrategy = new ChicagoSprintShipper(weight);
        break;
      case 7:
      case 8:
      case 9:
        Shipment.shipment.shippingStrategy = new PacificParcelShipper(weight);
        break;
      default:
        throw new Error("Not valid zip code");
    }
  }

  public static initialise(options: ShipOptions): void {
    if (Shipment.IS_INITIALISE_CALLED) throw new Error("Error of initialising");

    Shipment.initialiseBaseInstance();
    Shipment.IS_INITIALISE_CALLED = true;

    this.shipment.shipmentID = options.shipmentID ?? this.shipment.generateID();
    this.shipment.weight = options.weight;
    this.shipment.fromAddress = options.fromAddress;
    this.shipment.toAddress = options.toAddress;
    this.shipment.fromZipCode = options.fromZipCode;
    this.shipment.toZipCode = options.toZipCode;

    Shipment.setShippingStrategy();
    this.shipment.price = this.shipment.shippingStrategy.getCost();
  }

  public static getInstance(): Shipment {
    Shipment.initialiseBaseInstance();

    return Shipment.shipment;
  }

  public static getShipmentID() {
    Shipment.initialiseBaseInstance();
    return Shipment.shipment.shipmentID;
  }

  public static ship(): string {
    Shipment.initialiseBaseInstance();
    const { shipmentID, fromAddress, toAddress, price } = this.shipment;

    return `${shipmentID}, from:${fromAddress}, to:${toAddress}, ${price}$`;
  }

  //setters
  public static setFromAddress(value: string) {
    Shipment.initialiseBaseInstance();

    this.shipment.fromAddress = value;
  }

  public static setToAddress(value: string) {
    Shipment.initialiseBaseInstance();

    this.shipment.toAddress = value;
  }

  public static setFromZipCode(value: string) {
    Shipment.initialiseBaseInstance();

    this.shipment.fromZipCode = value;
  }

  public static setToZipCode(value: string) {
    Shipment.initialiseBaseInstance();

    this.shipment.toZipCode = value;
  }
}
