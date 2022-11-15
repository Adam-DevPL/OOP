import * as is from "is";

export class Validator {
  static checkIfEmailExist(email: string): boolean {
    if (is.not.email(email)) {
      throw new Error(`Input email ${email} is not valid`);
    }
    return true;
  }

  static checkIfStringExist(text: string): boolean {
    if (is.not.string(text)) {
      throw new Error(`Input text ${text} is not valid`);
    }
    return true;
  }

  static checkIfArrayContainsEmails(array: string[]): boolean {
    if (array.length > 0) {
      array.forEach((element) => Validator.checkIfEmailExist(element));
      return true;
    }
    return false;
  }

  static checkIfFieldToExist(to: string): boolean {
    if (to === "") {
      throw new Error("Field To in email can not be empty.");
    }
    return true;
  }
}
