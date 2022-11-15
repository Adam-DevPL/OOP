import { IFinances } from "../interfaces/Finances";
import { IMeansOfTransport } from "../interfaces/MeansOfTransport";
import { IAddress, IDimensions, IShipping } from "../interfaces/Shipping";
import {
  ISpeditionCenter,
  wayOfTransport,
} from "../interfaces/SpeditionCenter";
import { ITransport, statusOfTransport } from "../interfaces/Transport";
import { Checker } from "../utils/Checker";
import { Shipping } from "./Shipping";
import { Transport } from "./Transport";
import { Truck } from "./Truck";

export class SpeditionCenter implements ISpeditionCenter {
  private static instance: SpeditionCenter;
  listOfMeansOfTransport: IMeansOfTransport[] = [];
  listOfShippings: IShipping[] = [];
  listOfTransports: ITransport[] = [];
  finances: IFinances = {
    actualCosts: 0,
    actualProfits: 0,
    estimateProfits: 0,
  };

  private constructor() {}

  changeStatusOfDelivery(
    transport: ITransport,
    status: statusOfTransport
  ): void {
    const foundTransport = this.listOfTransports.find(
      (transportFromList) => transportFromList.id === transport.id
    );
    if (foundTransport !== undefined) {
      this.listOfTransports.forEach((transportFromList) => {
        if (transportFromList.id === transport.id) {
          transportFromList.status = status;
          if (transport.status === "delivered") {
            this.finances.actualProfits += transport.price;
            this.finances.estimateProfits -= transport.price;
          }
        }
      });
    }
  }

  public static getInstance(): SpeditionCenter {
    if (!SpeditionCenter.instance) {
      SpeditionCenter.instance = new SpeditionCenter();
    }
    return SpeditionCenter.instance;
  }

  addMeanOfTransport(
    vehicle: wayOfTransport,
    model: string,
    registrationNumber: string,
    loadCapacity: number,
    range: number,
    cost: number
  ): void {
    switch (vehicle) {
      case "truck":
        const newTruck = new Truck(
          model,
          registrationNumber,
          loadCapacity,
          range,
          cost
        );
        this.listOfMeansOfTransport.push(newTruck);
        break;
      case "plane":
        const newPlane = new Truck(
          model,
          registrationNumber,
          loadCapacity,
          range,
          cost
        );
        this.listOfMeansOfTransport.push(newPlane);
        break;
      case "ship":
        const newShip = new Truck(
          model,
          registrationNumber,
          loadCapacity,
          range,
          cost
        );
        this.listOfMeansOfTransport.push(newShip);
        break;
      default:
        throw new Error("Mean of transport was not recognized");
    }
  }
  addShipping(
    weight: number,
    dimensions: IDimensions,
    address: IAddress
  ): void {
    const newShipping = new Shipping(weight, dimensions, address);
    this.listOfShippings.push(newShipping);
  }
  doTransport(meanOfTransport: IMeansOfTransport, shipping: IShipping): void {
    Checker.checkIfMeanOfTrasportExist(
      this.listOfMeansOfTransport,
      meanOfTransport
    );
    Checker.checkIfShippingExist(this.listOfShippings, shipping);

    const newTransport = new Transport(meanOfTransport, shipping, 10000);
    this.listOfTransports.push(newTransport);

    this.listOfTransports.forEach((transport) => {
      this.finances.actualCosts += transport.cost;
      if (transport.status === "received") {
        this.finances.estimateProfits += transport.price;
        this.finances.actualProfits -= transport.cost;
      }
    });
  }
}
