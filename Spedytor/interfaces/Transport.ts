import { IMeansOfTransport } from "./MeansOfTransport";
import { IShipping } from "./Shipping";

export interface ITransport {
  id: string;
  meanOfTransport: IMeansOfTransport;
  shipping: IShipping;
  status: statusOfTransport;
  cost: number;
  price: number;
}

export type statusOfTransport = "received" | "on the road" | "delivered";
