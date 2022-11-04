import { ShipmentsEnum } from "../enums/shipmentsEnum";

export abstract class Shipper {
  protected weight: number;
  protected type: ShipmentsEnum;
  protected CENT_PER_POUND_PACKAGE: number = 0;
  protected CENT_PER_POUND_LETTER: number = 0;

  constructor(weight: number, type: ShipmentsEnum) {
    this.weight = weight;
    this.type = type;
  }

  protected oversizedFormula(): number {
    return this.weight * this.CENT_PER_POUND_PACKAGE;
  }

  public getCost(): number {
    let price: number;
    switch (this.type) {
      case ShipmentsEnum.LETTER:
        price = this.weight * this.CENT_PER_POUND_LETTER;
        break;
      case ShipmentsEnum.PACKAGE:
        price = this.weight * this.CENT_PER_POUND_PACKAGE;
        break;
      case ShipmentsEnum.OVERSIZED:
        price = this.oversizedFormula();
        break;
    }

    return Number(price.toFixed(2));
  }
}

export class AirEastShipper extends Shipper {
  private static STANDART_FEE = 10;

  protected CENT_PER_POUND_PACKAGE = 0.39;
  protected CENT_PER_POUND_LETTER = 0.25;

  protected oversizedFormula(): number {
    return super.oversizedFormula() + AirEastShipper.STANDART_FEE;
  }
}

export class ChicagoSprintShipper extends Shipper {
  protected CENT_PER_POUND_PACKAGE = 0.42;
  protected CENT_PER_POUND_LETTER = 0.2;
}

export class PacificParcelShipper extends Shipper {
  private static FEE_PER_OUNCE = 0.02;

  protected CENT_PER_POUND_PACKAGE = 0.51;
  protected CENT_PER_POUND_LETTER = 0.19;

  protected oversizedFormula(): number {
    return (
      super.oversizedFormula() +
      this.weight * PacificParcelShipper.FEE_PER_OUNCE
    );
  }
}
