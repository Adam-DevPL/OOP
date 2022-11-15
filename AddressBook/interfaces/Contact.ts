export interface IContact {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  creationDate: Date;
  modifiedDate: Date | null;
  changeProperty: (key: string, newValue: string) => void;
}