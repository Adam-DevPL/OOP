import { IUser } from "../../interfaces/IUser";
import { Validator } from "../../validations/Validator";
import { v4 as uuid } from "uuid";

export class User implements IUser {
  id: string;
  firstname: string;
  lastname: string;
  constructor(firstname: string, lastname: string) {
    Validator.checkIfNotEmpty(firstname);
    Validator.checkIfNotEmpty(lastname);
    this.id = uuid();
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
