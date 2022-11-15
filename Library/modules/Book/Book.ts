import { IBook } from "../../interfaces/IBook";
import { Validator } from "../../validations/Validator";
import {v4 as uuid} from 'uuid';

export class Book implements IBook {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  constructor(title: string, author: string, image: string, description: string = '') {
    Validator.checkIfNotEmpty(title);
    Validator.checkIfNotEmpty(author);
    Validator.checkIfNotEmpty(image);
    this.id = uuid();
    this.title = title;
    this.author = author;
    this.image = image;
    this.description = description;
  }
}