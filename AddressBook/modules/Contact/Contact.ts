import { v4 as uuid } from "uuid";
import { IContact } from "../../interfaces/Contact";
import { Validator } from "../Validator/validator";

export class Contact implements IContact {
  readonly id: string;
  firstname: string;
  lastname: string;
  email: string;
  readonly creationDate: Date;
  modifiedDate: Date | null;

  constructor(firstname: string, lastname: string, email: string) {
    if (!Validator.validateEmail(email)) {
      throw new Error(`Invalid email address!`);
    }
    this.id = uuid();
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.creationDate = new Date();
    this.modifiedDate = null;
  }

  changeProperty(key: string, newValue: string) {
    if (Contact.prototype.hasOwnProperty.call(this, key)) {
      Object.assign(this, {
        [key]: newValue,
      });
      this.modifiedDate = new Date();
    } else {
      throw new Error(`Property ${key} not found`);
    }
  }

  // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
  // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
}
