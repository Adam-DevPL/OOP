export interface IPassenger {
  id: string;
  chosenClass: chosenClass;
  paidBaggageAmount: number;
}

export type chosenClass = "economic" | "bussiness" | "first";