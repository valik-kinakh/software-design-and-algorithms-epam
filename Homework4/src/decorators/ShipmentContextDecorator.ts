import { ShipmentContext } from "../shipment/ShipmentContext";
import { ShipmentMarks } from "../interfaces/ShipmentMarks";

export class ShipmentContextDecorator {
  protected shipmentContext: ShipmentContext;
  protected isFragile: boolean;
  protected notLeave: boolean;
  protected returnReceipt: boolean;

  constructor(shipmentContext: ShipmentContext, shipmentMarks?: ShipmentMarks) {
    this.shipmentContext = shipmentContext;
    this.isFragile = shipmentMarks?.isFragile ?? false;
    this.notLeave = shipmentMarks?.notLeave ?? false;
    this.returnReceipt = shipmentMarks?.returnReceipt ?? false;
  }

  protected fragileMarkMessage(): string {
    return this.isFragile ? "**MARK FRAGILE**\n" : "";
  }

  protected notLeaveMarkMessage(): string {
    return this.notLeave
      ? "**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**\n"
      : "";
  }

  protected returnReceiptMessage(): string {
    return this.returnReceipt ? "**MARK RETURN RECEIPT REQUESTED**\n" : "";
  }

  getShipmentID(): number {
    return this.shipmentContext.getShipmentID();
  }

  ship(): string {
    return `${this.shipmentContext.ship()}
${this.fragileMarkMessage()}${this.notLeaveMarkMessage()}${this.returnReceiptMessage()}`;
  }
}
