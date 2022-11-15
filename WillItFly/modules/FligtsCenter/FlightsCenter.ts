import { IFlight, weather } from "../../interfaces/Flight";
import { IFlightsCenter } from "../../interfaces/FlightsCenter";
import { IPassenger, chosenClass } from "../../interfaces/Passenger";
import { IPlane, ClassSeats } from "../../interfaces/Plane";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Passenger/Passenger";
import { Plane } from "../Plane/Plane";

export class FlightsCenter implements IFlightsCenter {
  private static instance: FlightsCenter;
  planes: IPlane[] = [];
  passengers: IPassenger[] = [];
  flights: IFlight[] = [];

  private constructor() {}

  public static getInstance(): FlightsCenter {
    if (!FlightsCenter.instance) {
      FlightsCenter.instance = new FlightsCenter();
    }
    return FlightsCenter.instance;
  }

  addPlane(tankCapacity: number, seats: ClassSeats): void {
    const newPlane = new Plane(tankCapacity, seats);
    this.planes.push(newPlane);
  }
  addPassenger(chosenClass: chosenClass, paidBaggageAmount: number): void {
    const newPassenger = new Passenger(chosenClass, paidBaggageAmount);
    this.passengers.push(newPassenger);
  }
  addFlight(
    plane: IPlane,
    passengers: IPassenger[],
    weather: weather,
    departureAirport: string,
    arrivalAirport: string,
    distance: number
  ): void {
    const newFlight = new Flight(plane, passengers, weather, departureAirport, arrivalAirport, distance);
    newFlight.checkIfProfitable();
    this.flights.push(newFlight);
  }
}
