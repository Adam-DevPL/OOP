import { ClassSeats } from "../interfaces/Plane";

export class PlaneValidator {
  static validateTankCapacity(tankCapacity: number) {
    if (tankCapacity <= 2500) {
      throw new Error("The tank capacity can bot be less then 2500 liter");
    }
  }

  static validatePassengerSeats(seats: ClassSeats) {
    const numberOfAllSeats = seats.economicClass + seats.bussinessClass + seats.firstClass;
    if (seats.economicClass !== 0.8 * numberOfAllSeats) {
      throw new Error(
        "The economic class seats is less or more then 80% of all seats in plane"
      );
    }
  }
}
