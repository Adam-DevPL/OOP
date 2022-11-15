import * as is from "is";

import { IUser, Role, Sex } from "../interfaces/IUser";

export class Validator {
  static checkInputData(
    firstname: string,
    lastname: string,
    birthDate: Date,
    pwd: string,
    email: string
  ): boolean {
    this.checkIfFirstnameAndLastnameValid(firstname, lastname);
    this.checkIfEmailValid(email);
    this.checkIfBirthDateValid(birthDate);
    this.checkIfPwdValid(pwd);

    return true;
  }

  static checkIfFirstnameAndLastnameValid(firstname: string, lastname: string) {
    if (is.any.empty(firstname, lastname)) {
      throw new Error("Firstname and Lastname can not be empty!");
    }
  }
  static checkIfBirthDateValid(birthDate: Date) {
    if (is.not.date(birthDate)) {
      throw new Error("It is not a proper date");
    }
  }
  static checkIfPwdValid(pwd: string) {
    if (
      !/^(((?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/g.test(
        pwd
      )
    ) {
      throw new Error("Password is incorrect");
    }
  }
  static checkIfEmailValid(email: string) {
    if (is.not.email(email)) {
      throw new Error("Email address is incorrect");
    }
  }
  static checkIfAdmin(user: IUser) {
    if (user.role !== "admin") {
      throw new Error("You habe no permission to change data!");
    }
  }
}
