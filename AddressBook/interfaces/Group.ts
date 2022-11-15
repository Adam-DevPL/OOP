import { Contact } from "../modules/Contact/Contact";
import { IContact } from "./Contact";

export interface IGroup {
  id: string;
  name: string;
  contactList: Contact[];
  addContact: (contact: IContact) => void;
  removeContact: (contact: IContact) => void;
  changeProperty: (key: string, newValue: string) => void;
}