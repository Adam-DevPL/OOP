import { IBook } from "../../interfaces/IBook";
import { IBooking } from "../../interfaces/IBooking";
import { IUser } from "../../interfaces/IUser";
import { Utils } from "../../utils/Utils";

export class Booking implements IBooking {
  user: IUser;
  lendingDate: Date;
  lastDateToReturn: Date;
  listOfBorrowedBooks: IBook[] = [];
  penalty: number = 10;
  penaltyAmount: number = 0;
  constructor(user: IUser, books: IBook[]) {
    this.user = user;
    this.lendingDate = new Date();
    this.lastDateToReturn = new Date(
      this.lendingDate.setDate(this.lendingDate.getDate() + 7)
    );
    this.borrowBooks(books);
  }

  borrowBooks(books: IBook[]) {
    this.listOfBorrowedBooks.push(...books);
  }

  returnBooks(books: IBook[]) {
    if (!Utils.checkIfListOfBooksNotEmpty(this.listOfBorrowedBooks)) {
      const currentDate = new Date();
      const booksToReturn = Utils.findBooksToReturn(
        this.listOfBorrowedBooks,
        books
      );
      const penalty =
        Utils.calculatePenalty(
          currentDate,
          this.lastDateToReturn,
          this.penalty
        ) * booksToReturn.length;
      this.listOfBorrowedBooks = Utils.updateListOfBooks(
        this.listOfBorrowedBooks,
        books
      ) as IBook[];
      if (penalty > 0) return `You have to pay penalty ${this.penaltyAmount}`;
      return "Thank you";
    }
  }
}
