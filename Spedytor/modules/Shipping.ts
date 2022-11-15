import { v4 as uuid } from "uuid";
import { IAddress, IDimensions, IShipping } from "../interfaces/Shipping";
import { Validator } from "../validator/Validator";

export class Shipping implements IShipping {
  id: string;
  weight: number;
  dimensions: IDimensions;
  address: IAddress;

  constructor(weight: number, dimensions: IDimensions, address: IAddress) {
    Validator.validateWeightOfShippment(weight);
    Validator.validateDimensionsOfShippment(dimensions);
    Validator.validateAddressOfShippment(address);
    this.id = uuid();
    this.weight = weight;
    this.dimensions = dimensions;
    this.address = address;
  }
}
