import { Letter, Oversize, Package, Shipment } from "./Shipment";
import { ShipOptions } from "../interfaces/ShipOptions";

export class ShipmentContext {
  private shipment: Shipment;
  private static LETTER_MAX_WEIGHT: number = 15;
  private static PACKAGE_MAX_WEIGHT: number = 160;

  constructor(options: ShipOptions) {
    this.setShipment(options);
  }

  private setShipment(options: ShipOptions) {
    const { weight } = options;
    switch (true) {
      case weight <= ShipmentContext.LETTER_MAX_WEIGHT:
        this.shipment = new Letter(options);
        break;
      case weight <= ShipmentContext.PACKAGE_MAX_WEIGHT:
        this.shipment = new Package(options);
        break;
      default:
        this.shipment = new Oversize(options);
    }
  }

  public getShipmentID() {
    return this.shipment.getShipmentID();
  }

  public ship() {
    return this.shipment.ship();
  }
}
