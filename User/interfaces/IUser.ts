export interface IUser {
  firstname: string;
  lastname: string;
  birthDate: string;
  pwd: string;
  sex: Sex;
  email: string;
  role: Role;
}

export type Sex = "male" | "female";
export type Role = "admin" | "user";
