import { IMeansOfTransport } from "../interfaces/MeansOfTransport";
import { IShipping } from "../interfaces/Shipping";

export class Checker {
  static checkIfMeanOfTrasportExist(
    meansOfTransport: IMeansOfTransport[],
    meanOfTransport: IMeansOfTransport
  ) {
    const foundMeanOfTransport = meansOfTransport.find(
      (meanOFTranspoerFromList) =>
        meanOFTranspoerFromList.id === meanOfTransport.id
    );
    if (foundMeanOfTransport === undefined) {
      throw new Error("Mean of transport does not found");
    }
  }
  static checkIfShippingExist(
    listOfShippings: IShipping[],
    shipping: IShipping
  ) {
    const foundShipping = listOfShippings.find(
      (shippingFromList) => shippingFromList.id === shipping.id
    );
    if (foundShipping === undefined) {
      throw new Error("Shipping does not found");
    }
  }
  static checkIfShippingCanBeTransported(
    meansOfTransport: IMeansOfTransport,
    shipping: IShipping
  ) {
    if (shipping.weight > meansOfTransport.loadCapacity) {
      throw new Error(
        "This mean of transport can not be used to transport this shipping"
      );
    }
  }
}
