import { v4 as uuid } from "uuid";

import { chosenClass, IPassenger } from "../../interfaces/Passenger";
import { PassengerValidator } from "../../validators/PassengerValidator";

export class Passenger implements IPassenger {
  id: string;
  chosenClass: chosenClass;
  paidBaggageAmount: number;

  constructor(chosenClass: chosenClass, paidBaggageAmount: number) {
    PassengerValidator.validateNumberOfBaggages(paidBaggageAmount);

    this.id = uuid();
    this.chosenClass = chosenClass;
    this.paidBaggageAmount = paidBaggageAmount;
  }
}
