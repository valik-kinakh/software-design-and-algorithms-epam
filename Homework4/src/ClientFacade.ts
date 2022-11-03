import { Shipment } from "./shipment/Shipment";
import { ShipOptions } from "./interfaces/ShipOptions";

export class ClientFacade {
  private shipment: Shipment;

  public createShip(options: ShipOptions) {
    this.shipment = new Shipment(options);

    return this.shipment.getShipmentID();
  }

  public ship() {
    return this.shipment.ship();
  }
}
