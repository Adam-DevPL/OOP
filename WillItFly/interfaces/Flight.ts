import { IPassenger } from "./Passenger";
import { IPlane } from "./Plane";

export interface IFlight {
  id: string;
  plane: IPlane;
  passengers: IPassenger[];
  weather: weather;
  departureAirport: string;
  arrivalAirport: string;
  distance: number;
  readonly fuelConsumption: number;
  calculateFuel(): number;
  checkIfInterstates(neededFuel: number): boolean;
  checkIfProfitable(): void;
}

export type weather = "good" | "windy" | "storm";