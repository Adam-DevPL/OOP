export interface IShipping {
  id: string;
  weight: number;
  dimensions: IDimensions;
  address: IAddress;
}

export interface IDimensions {
  height: number;
  length: number;
  width: number;
}

export interface IAddress {
  country: string;
  city: string;
  street: string;
  zipCode: string;
}