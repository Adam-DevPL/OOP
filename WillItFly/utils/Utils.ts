import { chosenClass } from "../interfaces/Passenger";
import { ClassSeats } from "../interfaces/Plane";

export class Utils {
  static checkIfFlightCanBeRealized(
    passengersSeats: chosenClass[],
    planeSeats: ClassSeats
  ) {
    if (
      passengersSeats.length >
      planeSeats.economicClass +
        planeSeats.bussinessClass +
        planeSeats.firstClass
    ) {
      console.log("There are more passengers then seats in plane");
      return false;
    }
    let economic = 0;
    let bussiness = 0;
    let first = 0;
    passengersSeats.forEach((passengerSeat) => {
      switch (passengerSeat) {
        case "economic":
          economic++;
          break;
        case "bussiness":
          bussiness++;
          break;
        case "first":
          first++;
          break;
      }
    });
    if (
      planeSeats.economicClass < economic ||
      planeSeats.bussinessClass < bussiness ||
      planeSeats.firstClass < first
    ) {
      console.log("There is more passengers the seats on one of the class");
      return false;
    }

    if (
      economic <
      0.5 *
        (planeSeats.economicClass +
          planeSeats.bussinessClass +
          planeSeats.firstClass)
    ) {
      console.log("There is less passengers then 50% of economic class");
      return false;
    }
    return true;
  }
}
