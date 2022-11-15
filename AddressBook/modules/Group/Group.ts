import { v4 as uuid } from "uuid";
import { IContact } from "../../interfaces/Contact";
import { IGroup } from "../../interfaces/Group";
import { ModifyGroup } from "../Handlers/ModifyGroup";

export class Group implements IGroup {
  readonly id: string = uuid();
  name: string;
  contactList: IContact[] = [];


  constructor(name: string = "Default") {
    this.name = name;
  }

  changeProperty(key: string, newValue: string) {
    if (Group.prototype.hasOwnProperty.call(this, key)) {
      Object.assign(this, {
        [key]: newValue,
      });
    } else {
      throw new Error(`Property ${key} not found`);
    }
  }

  addContact(contact: IContact) {
    ModifyGroup.handleAddContact(contact, this.contactList);
  }

  removeContact(contact: IContact) {
    ModifyGroup.handleRemoveContact(contact, this.contactList);
  }

  // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
  // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
}
