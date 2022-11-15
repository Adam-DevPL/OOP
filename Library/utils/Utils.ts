import * as is from "is";
import { IBook, IBookStocks } from "../interfaces/IBook";
import { User } from "../modules/User/User";
import { Messages } from "./Messages";

export class Utils {
  static checkIfListOfBooksNotEmpty(listOfBooks: IBook[]) {
    if (!is.empty(listOfBooks)) {
      return false;
    }
    Messages.listIsEmpty();
    return true;
  }

  static findBook(listOfBooks: IBook[], searchedBook: IBook): IBook | null {
    const foundBook = listOfBooks.find(
      (bookFromList) => bookFromList.id === searchedBook.id
    );
    return foundBook ?? null;
  }

  static findBooksToReturn(listOfBooks: IBook[], searchedBooks: IBook[]) {
    const foundBooks = searchedBooks.filter((serachedBook) =>
      Utils.findBook(listOfBooks, serachedBook)
    );
    if (foundBooks.length === 0) {
      Messages.booksOutOfList();
      return [];
    }
    return foundBooks;
  }

  static calculatePenalty(
    currentDate: Date,
    returnDate: Date,
    penalty: number
  ) {
    const overdue = currentDate.getDate() - returnDate.getDate();
    return overdue > 0 ? overdue * penalty : 0;
  }

  static findBookInLibrary(
    listOfBooksInLibrary: IBook[],
    bookTitle: string,
    bookAuthor: string
  ) {
    return (
      listOfBooksInLibrary.find(
        (bookFromList) =>
          bookFromList.title === bookTitle && bookFromList.author === bookAuthor
      ) ?? null
    );
  }

  static findBookInLibraryToRemove(
    listOfBooksInLibrary: IBookStocks[],
    bookToRemoveId: string
  ) {
    return (
      listOfBooksInLibrary.find(
        (bookFromList) => bookFromList.id === bookToRemoveId
      ) ?? null
    );
  }

  static updateListOfBooks(
    listOfBooks: IBook[] | IBookStocks[],
    books: IBook[] | IBookStocks[]
  ): IBook[] | IBookStocks[] {
    return listOfBooks.filter((bookFromList) =>
      books.findIndex((book) => book.id === bookFromList.id)
    );
  }

  static findUser(listOfUsers: User[], firstname: string, lastname: string) {
    return listOfUsers.find(
      (userFromList) =>
        userFromList.firstname === firstname &&
        userFromList.lastname === lastname
    );
  }

  static checkIfUserExist(listOfUsers: User[], user: User) {
    return (
      listOfUsers.find((userFromList) => userFromList.id === user.id) ?? null
    );
  }

  static deleteDuplicatedBooks(books: IBook[]) {
    const uniqueBooksTmp: string[] = [];
    return books.filter((bookYouWant) => {
      const duplicateBook = uniqueBooksTmp.includes(bookYouWant.id);
      if (!duplicateBook) {
        uniqueBooksTmp.push(bookYouWant.id);
        return true;
      } else {
        return false;
      }
    });
  }

  static checkIfBookIsAvailable(
    listOfBooks: IBookStocks[],
    searchedBook: IBook
  ) {
    return (
      listOfBooks.find((bookFromList) => bookFromList.id === searchedBook.id) ??
      null
    );
  }
}
