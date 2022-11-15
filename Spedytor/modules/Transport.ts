import {v4 as uuid} from "uuid";

import { IMeansOfTransport } from "../interfaces/MeansOfTransport";
import { IShipping } from "../interfaces/Shipping";
import { ITransport, statusOfTransport } from "../interfaces/Transport";
import { Checker } from "../utils/Checker";

export class Transport implements ITransport {
  id: string;
  meanOfTransport: IMeansOfTransport;
  shipping: IShipping;
  status: statusOfTransport;
  cost: number;
  price: number;

  constructor(meanOfTransport: IMeansOfTransport, shipping: IShipping, price: number) {
    Checker.checkIfShippingCanBeTransported(meanOfTransport, shipping);
    this.id = uuid();
    this.meanOfTransport = meanOfTransport;
    this.shipping = shipping;
    this.status = "received";
    this.cost = this.meanOfTransport.cost;
    this.price = price;
  }
}