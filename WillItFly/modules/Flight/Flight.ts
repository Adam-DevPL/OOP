import { v4 as uuid } from "uuid";

import { IFlight, weather } from "../../interfaces/Flight";
import { IPassenger } from "../../interfaces/Passenger";
import { IPlane } from "../../interfaces/Plane";
import { Utils } from "../../utils/Utils";

export class Flight implements IFlight {
  id: string;
  plane: IPlane;
  passengers: IPassenger[];
  weather: weather;
  departureAirport: string;
  arrivalAirport: string;
  distance: number;
  fuelConsumption: number = 0.03; // 3l / passenger / 100 km

  constructor(
    plane: IPlane,
    passengers: IPassenger[],
    weather: weather,
    departureAirport: string,
    arrivalAirport: string,
    distance: number
  ) {
    if (
      !Utils.checkIfFlightCanBeRealized(
        passengers.map((passenger) => passenger.chosenClass),
        plane.seats
      )
    ) {
      throw new Error("Can not create a flight");
    }
    this.id = uuid();
    this.plane = plane;
    this.passengers = [...passengers];
    this.weather = weather;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.distance = distance;
  }

  calculateFuel(): number {
    let weatherRate = 0;
    switch (this.weather) {
      case "windy":
        weatherRate = 0.1;
        break;
      case "storm":
        weatherRate = 0.2;
        break;
    }
    return (
      this.distance * this.passengers.length * (this.fuelConsumption +
      weatherRate * this.fuelConsumption)
    );
  }

  checkIfInterstates(neededFuel: number): boolean {
    return neededFuel > this.plane.tankCapacity;
  }

  checkIfProfitable(): void {
    const neededFuel = this.calculateFuel();
    let profitEconomicClass = 0;
    let profitBussinessClass = 0;
    let profitFirstClass = 0;
    this.passengers.forEach((passengerSeat) => {
      switch (passengerSeat.chosenClass) {
        case "economic":
          profitEconomicClass++;
          break;
        case "bussiness":
          profitBussinessClass++;
          break;
        case "first":
          profitFirstClass++;
          break;
      }
    });
    const profitBaggages = this.passengers.reduce(
      (total, current) => total + current.paidBaggageAmount,
      0
    );
    const costOfFlight = neededFuel * 7;
    const profitOfFlight =
      profitEconomicClass * 300 +
      profitBussinessClass * 600 +
      profitFirstClass * 900 +
      profitBaggages * 100;

    if (profitOfFlight > costOfFlight * 3) {
      console.log("The flight is profitable");
      if (this.checkIfInterstates(neededFuel)) {
        console.log("There will be an interstate");
      }
    } else {
      console.log("The flight is not profitable");
      if (this.checkIfInterstates(neededFuel)) {
        console.log("And there will be interstate");
      }
    }
  }
}
