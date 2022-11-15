import { IBook } from "./IBook";
import { IUser } from "./IUser";

export interface IBooking {
  user: IUser;
  lendingDate: Date;
  lastDateToReturn: Date;
  listOfBorrowedBooks: IBook[];
  penalty: number;
  penaltyAmount: number;
  borrowBooks: (books: IBook[]) => void;
  returnBooks: (books: IBook[]) => void;
}