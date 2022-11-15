import * as is from 'is';

import { IBook } from "../interfaces/IBook";

export class Validator {
  static checkIfNotEmpty(value: string) {
    if (is.empty(value)) {
      throw new Error("Firstname or lastname is empty!");
    }
  }
  static checkIfListOfBooksNotEmpty(listOfBooks: IBook[]) {
    if (is.empty(listOfBooks)) {
      throw new Error('Ypu have non of the books to return.')
    }
  }
}
