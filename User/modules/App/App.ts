import { IApp } from "../../interfaces/IApp";
import { IUser, Role, Sex } from "../../interfaces/IUser";
import { ModifyProperty } from "../../utils/ModifyProperty";
import { Validator } from "../../validators/Validator";
import { User } from "../User/User";

export class App implements IApp {
  private static instance: App;
  listOfUsers: IUser[] = [];

  private constructor() {}

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  createUser(
    firstname: string,
    lastname: string,
    birthDate: Date,
    pwd: string,
    sex: Sex,
    email: string
  ) {
    const newUser = new User(
      firstname,
      lastname,
      birthDate,
      pwd,
      sex,
      email,
      "user"
    );
    this.listOfUsers.push(newUser);
  }
  createAdmin(
    firstname: string,
    lastname: string,
    birthDate: Date,
    pwd: string,
    sex: Sex,
    email: string
  ) {
    const newAdmin = new User(
      firstname,
      lastname,
      birthDate,
      pwd,
      sex,
      email,
      "admin"
    );
    this.listOfUsers.push(newAdmin);
  }
  changeEmailAddress(admin: IUser, user: IUser, newEamilAddress: string) {
    Validator.checkIfAdmin(admin);
    Validator.checkIfEmailValid(newEamilAddress);
    ModifyProperty.changeProperty(this.listOfUsers, user, newEamilAddress);
  }
  changePwd(admin: IUser, user: IUser, newPwd: string) {
    Validator.checkIfAdmin(admin);
    Validator.checkIfPwdValid(newPwd);
    ModifyProperty.changeProperty(this.listOfUsers, user, newPwd);
  }
  changeRole(admin: IUser, user: IUser, newRole: Role) {
    Validator.checkIfAdmin(admin);
    ModifyProperty.changeProperty(this.listOfUsers, user, newRole);
  }
}
