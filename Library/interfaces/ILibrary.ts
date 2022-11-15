import { IBook, IBookStocks } from "./IBook";
import { IBooking } from "./IBooking";
import { IUser } from "./IUser";

export interface ILibrary {
  listOfBooks: IBookStocks[];
  listOfBookings: IBooking[];
  listOfUsers: IUser[];
  addBook: (title: string, author: string, image: string, description: string) => void;
  removeBook: (bookToRemoveId: string) => void;
  loanBook: (firstname: string, lastname: string, books: IBook[]) => void;
  returnBooks: (user: IUser, books: IBook[]) => void;   
}