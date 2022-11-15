import { IUser, Role } from "../interfaces/IUser";

export class ModifyProperty {
  static changeProperty(listOfUsers: IUser[], userToModify: IUser, newData: string | Role) {
    const findedUser = listOfUsers.find(
      (ele) =>
        ele.firstname === userToModify.firstname && ele.lastname === userToModify.lastname
    );
    if (findedUser) {
      findedUser.email = newData;
    }
  }
}