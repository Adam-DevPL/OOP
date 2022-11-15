export interface IPlane {
  id: string;
  tankCapacity: number;
  seats: ClassSeats;
}

export interface ClassSeats {
  economicClass: number;
  bussinessClass: number;
  firstClass: number;
}