export abstract class Shipper {
  protected weight: number;
  protected CENT_PER_POUND = 0;

  constructor(weight: number) {
    this.weight = weight;
  }

  public getCost(): number {
    return this.weight * this.CENT_PER_POUND;
  }
}

export class AirEastShipper extends Shipper {
  protected CENT_PER_POUND = 0.39;
}

export class ChicagoSprintShipper extends Shipper {
  protected CENT_PER_POUND = 0.42;
}

export class PacificParcelShipper extends Shipper {
  protected CENT_PER_POUND = 0.42;
}
