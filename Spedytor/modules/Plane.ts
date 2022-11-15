import {v4 as uuid} from "uuid";
import { IMeansOfTransport } from "../interfaces/MeansOfTransport";
import { Validator } from "../validator/Validator";

export class Plane implements IMeansOfTransport {
  id: string;
  model: string;
  registrationNumber: string;
  loadCapacity: number;
  range: number;
  cost: number;
  
  
  constructor(model: string, registrationNumber: string, loadCapacity: number, range: number, cost: number) {
    Validator.validateModelAndRegistrationNumber(model, registrationNumber);
    Validator.validateLoadCapacityRangeCost(loadCapacity, range, cost);
    this.id = uuid();
    this.model = model;
    this.registrationNumber = registrationNumber;
    this.loadCapacity = loadCapacity;
    this.range = range;
    this.cost = cost;
  }
}