import { IBook, IBookStocks } from "../../interfaces/IBook";
import { IBooking } from "../../interfaces/IBooking";
import { ILibrary } from "../../interfaces/ILibrary";
import { IUser } from "../../interfaces/IUser";
import { Messages } from "../../utils/Messages";
import { Utils } from "../../utils/Utils";
import { Book } from "../Book/Book";
import { Booking } from "../Booking/Booking";
import { User } from "../User/User";

export class Library implements ILibrary {
  listOfBooks: IBookStocks[] = [];
  listOfBookings: IBooking[] = [];
  listOfUsers: IUser[] = [];

  addBook(
    title: string,
    author: string,
    image: string,
    description: string = ""
  ) {
    const foundBook = Utils.findBookInLibrary(this.listOfBooks, title, author);
    if (!foundBook) {
      const newBook = new Book(title, author, image, description);
      this.listOfBooks.push({ ...newBook, available: 1, stock: 1 });
    } else {
      this.listOfBooks.forEach((bookInLibrary) => {
        if (bookInLibrary.id === foundBook.id) {
          bookInLibrary.available++;
          bookInLibrary.stock++;
        }
      });
    }
  }

  removeBook(bookToRemoveId: string) {
    const foundBook = Utils.findBookInLibraryToRemove(
      this.listOfBooks,
      bookToRemoveId
    );
    if (!foundBook) {
      Messages.bookCanBeRemoved(foundBook);
      return
    } 
    if (foundBook && foundBook.available === 1) {
      Messages.bookCanBeRemoved(null);
      return
    }
    
    if (foundBook && foundBook.available > 1) {
        this.listOfBooks.forEach((bookInLibrary) => {
          if (bookInLibrary.id === foundBook.id) {
            bookInLibrary.available--;
            bookInLibrary.stock--;
          }
        });
      } else if (foundBook && foundBook.available === 1) {
        this.listOfBooks = Utils.updateListOfBooks(this.listOfBooks, [
          foundBook,
        ]) as IBookStocks[];
      } else {
        Messages.bookCanBeRemoved(null);
      }
    
  }

  loanBook(firstname: string, lastname: string, books: IBook[]) {
    let user = Utils.findUser(this.listOfUsers, firstname, lastname);
    if (!user) {
      user = new User(firstname, lastname);
      this.listOfUsers.push(user);
    }
    const booksFoundInLibrary: IBook[] = [];
    const booksNotFoundInLibrary: IBook[] = [];

    const uniqueBooks = Utils.deleteDuplicatedBooks(books);

    uniqueBooks.forEach((bookYouWant) => {
      if (
        Utils.findBook(this.listOfBooks, bookYouWant) &&
        Utils.checkIfBookIsAvailable(this.listOfBooks, bookYouWant)
      ) {
        booksFoundInLibrary.push(bookYouWant);
        this.listOfBooks.forEach((bookFromList) => {
          if (bookFromList.id === bookYouWant.id) {
            bookFromList.available--;
          }
        });
      } else {
        booksNotFoundInLibrary.push(bookYouWant);
      }
    });

    const newBooking = new Booking(user, booksFoundInLibrary);
    this.listOfBookings.push(newBooking);
  }

  returnBooks(user: IUser, books: IBook[]) {
    if (Utils.checkIfUserExist(this.listOfUsers, user)) {
      const bookings = this.listOfBookings.filter(
        (booking) => booking.user.id === user.id
      );

      bookings.forEach((booking) => {
        booking.returnBooks(books);
      });

      books.forEach((bookToReturn) => {
        if (Utils.findBook(this.listOfBooks, bookToReturn)) {
          this.listOfBooks.forEach((bookFromList) => {
            if (
              bookFromList.id === bookToReturn.id &&
              bookFromList.available <= bookFromList.stock
            ) {
              bookFromList.available++;
            }
          });
        }
      });
    }
  }
}
