import { v4 as uuid } from "uuid";

import { ClassSeats, IPlane } from "../../interfaces/Plane";
import { PlaneValidator } from "../../validators/PlaneValidator";

export class Plane implements IPlane {
  id: string;
  tankCapacity: number;
  seats: ClassSeats;

  constructor(tankCapacity: number, seats: ClassSeats) {
    PlaneValidator.validateTankCapacity(tankCapacity);
    PlaneValidator.validatePassengerSeats(seats);

    this.id = uuid();
    this.tankCapacity = tankCapacity;
    this.seats = seats;
  }
}
