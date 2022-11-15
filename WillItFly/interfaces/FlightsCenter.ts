import { IFlight, weather } from "./Flight";
import { IPassenger, chosenClass } from "./Passenger";
import { ClassSeats, IPlane } from "./Plane";

export interface IFlightsCenter {
  planes: IPlane[];
  passengers: IPassenger[];
  flights: IFlight[];
  addPlane(tankCapacity: number, seats: ClassSeats): void;
  addPassenger(chosenClass: chosenClass, paidBaggageAmount: number): void;
  addFlight(
    plane: IPlane,
    passengers: IPassenger[],
    weather: weather,
    departureAirport: string,
    arrivalAirport: string,
    distance: number
  ): void;
}
