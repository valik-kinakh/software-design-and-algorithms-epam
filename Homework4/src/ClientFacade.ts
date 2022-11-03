import { Shipment } from "./Shipment";
import { ShipOptions } from "./interfaces/ShipOptions";

export class ClientFacade {
  public createShip(options: ShipOptions) {
    Shipment.initialise(options);

    return Shipment.getShipmentID();
  }

  public ship() {
    return Shipment.ship();
  }
}
