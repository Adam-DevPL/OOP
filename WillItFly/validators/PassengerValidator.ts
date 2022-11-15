export class PassengerValidator {
  static validateNumberOfBaggages(baggages: number) {
    if (baggages > 2) {
      throw new Error("You exceeded the limit of baggages");
    }
  }
}
