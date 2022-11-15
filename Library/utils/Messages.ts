import { IBookStocks } from "../interfaces/IBook";

export class Messages {
  static listIsEmpty() {
    console.log("You have none of the books to return.");
  }

  static booksOutOfList() {
    console.log("Books you want to return are not on a list");
  }

  static printOverdueInfo(overdue: boolean) {
    console.log(overdue?"You have overdue the deadline":'Thank you');
    // if (overdue) {
    //   console.log("You have overdue the deadline");
    // } else console.log("Thank you");
  }

  static bookCanBeRemoved(found: IBookStocks | null) {
    if (found) {
      console.log("Book was removed successfully");
    } else {
      console.log("Book can not be removed");
      
    }
  }
}
