import { ShipOptions } from "./interfaces/ShipOptions";
import { ShipmentContext } from "./shipment/ShipmentContext";
import { ShipmentContextDecorator } from "./decorators/ShipmentContextDecorator";
import { ShipmentMarks } from "./interfaces/ShipmentMarks";

export class ClientFacade {
  private shipment: ShipmentContextDecorator;

  public createShip(options: ShipOptions, shipmentMarks?: ShipmentMarks) {
    this.shipment = new ShipmentContextDecorator(
      new ShipmentContext(options),
      shipmentMarks
    );

    return this.shipment.getShipmentID();
  }

  public ship() {
    return this.shipment.ship();
  }
}
