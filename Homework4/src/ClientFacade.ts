import { ShipOptions } from "./interfaces/ShipOptions";
import { ShipmentContext } from "./shipment/ShipmentContext";

export class ClientFacade {
  private shipment: ShipmentContext;

  public createShip(options: ShipOptions) {
    this.shipment = new ShipmentContext(options);

    return this.shipment.getShipmentID();
  }

  public ship() {
    return this.shipment.ship();
  }
}
