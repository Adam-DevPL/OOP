import { IUser, Role, Sex } from "./IUser";

export interface IApp {
  listOfUsers: IUser[];
  createUser: (
    firstname: string,
    lastname: string,
    birthDate: Date,
    pwd: string,
    sex: Sex,
    email: string,
  ) => void;
  createAdmin: (
    firstname: string,
    lastname: string,
    birthDate: Date,
    pwd: string,
    sex: Sex,
    email: string,
  ) => void;
  changeEmailAddress: (admin: IUser, user: IUser, newEamilAddress: string) => void;
  changePwd: (admin: IUser, user: IUser, newPwd: string) => void;
  changeRole: (admin: IUser, user: IUser, newRole: Role) => void;
}
