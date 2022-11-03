import { ShipOptions } from "./interfaces/ShipOptions";

export class Shipment {
  private static shipment: Shipment;

  private static readonly CENT_PER_POUND = 0.39;
  private static readonly IS_INITIALISE_CALLED = false;

  private shipmentID: number;
  private weight: number;
  private fromAddress: string;
  private toAddress: string;
  private fromZipCode: string;
  private toZipCode: string;
  private price: number;

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

  private toFixed(number: number): number {
    return Number(number.toFixed(2));
  }

  private static initialiseBaseInstance(): void {
    if (!Shipment.shipment) {
      Shipment.shipment = new Shipment();
    }
  }

  public static initialise(options: ShipOptions): void {
    if (Shipment.IS_INITIALISE_CALLED) throw new Error("Error of initialising");

    Shipment.initialiseBaseInstance();

    this.shipment.shipmentID = options.shipmentID ?? this.shipment.generateID();
    this.shipment.weight = options.weight;
    this.shipment.fromAddress = options.fromAddress;
    this.shipment.toAddress = options.toAddress;
    this.shipment.fromZipCode = options.fromZipCode;
    this.shipment.toZipCode = options.toZipCode;
    this.shipment.price = this.shipment.toFixed(
      this.shipment.weight * Shipment.CENT_PER_POUND
    );
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
