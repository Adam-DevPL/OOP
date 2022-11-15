import { IFinances } from "./Finances";
import { IMeansOfTransport } from "./MeansOfTransport";
import { IAddress, IDimensions, IShipping } from "./Shipping";
import { ITransport, statusOfTransport } from "./Transport";

export interface ISpeditionCenter {
  listOfMeansOfTransport: IMeansOfTransport[];
  listOfShippings: IShipping[];
  listOfTransports: ITransport[];
  finances: IFinances;
  addMeanOfTransport(
    vehicle: wayOfTransport,
    model: string,
    registrationNumber: string,
    loadCapacity: number,
    range: number,
    cost: number
  ): void;
  addShipping(weight: number, dimensions: IDimensions, address: IAddress): void;
  doTransport(meanOfTransport: IMeansOfTransport, shipping: IShipping): void;
  changeStatusOfDelivery(transport: ITransport, status: statusOfTransport): void;
}

export type wayOfTransport = "truck" | "ship" | "plane";

