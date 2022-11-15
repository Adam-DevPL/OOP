import { IUser, Role, Sex } from "../../interfaces/IUser";
import { Validator } from "../../validators/Validator";

export class User implements IUser {
  firstname: string;
  lastname: string;
  birthDate: string;
  pwd: string;
  sex: Sex;
  email: string;
  role: Role;

  constructor(
    firstname: string,
    lastname: string,
    birthDate: Date,
    pwd: string,
    sex: Sex,
    email: string,
    role: Role
  ) {
    Validator.checkInputData(firstname, lastname, birthDate, pwd, email);
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate.toLocaleDateString("en-US");
    this.pwd = pwd;
    this.sex = sex;
    this.email = email;
    this.role = role;
  }
}
