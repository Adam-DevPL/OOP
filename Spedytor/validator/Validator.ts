import * as is from 'is';
import { IAddress, IDimensions } from "../interfaces/Shipping";

export class Validator {
  static validateWeightOfShippment(weight: number) {
    if (weight <= 0) {
      throw new Error(
        "The weight of shippment can not be zero or less then zero!"
      );
    } else if (weight > 0 && weight < 100) {
      throw new Error(
        "The minimal weight of shippment can not be less then 100 kg"
      );
    }
  }
  static validateDimensionsOfShippment(dimensions: IDimensions) {
    if (
      dimensions.height <= 0 ||
      dimensions.width <= 0 ||
      dimensions.length <= 0
    ) {
      throw new Error("One of the dimenisons is zero or less then zero.");
    }
  }
  static validateAddressOfShippment(address: IAddress) {
    if (
      is.any.empty(
        address.city,
        address.country,
        address.street,
        address.zipCode
      )
    ) {
      throw new Error("One of the field of address is empty");
    }
  }
  static validateModelAndRegistrationNumber(model: string, registrationNumber: string) {
    if (is.any.empty(model, registrationNumber)) {
      throw new Error('Model and registration number can not be empty');
    }
  }
  static validateLoadCapacityRangeCost(loadCapacity: number, range: number, cost: number) {
    if (loadCapacity <= 0 || range <= 0 || cost <= 0) {
      throw new Error('Load capacity, range or cost can not be zero or less then zero');
    }
  }
}
