import { Contact } from "../Contact/Contact";
import { Group } from "../Group/Group";

export class Validator {
  static validateEmail(email: string): boolean {
    const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  }

  static checkIfExistContact(list: Group | Contact[], element: Contact): Contact {
    if (list instanceof Group) {
      return list.contactList.filter((contact) => contact.firstname === element.firstname && contact.lastname === element.lastname && contact.email === element.email)[0];
    } 
    return list.filter((contact) => contact.firstname === element.firstname && contact.lastname === element.lastname && contact.email === element.email)[0];
  }

  static checkIfExistGroup(list: Group[], element: Group): boolean {
    return list.some((group) => group.name === element.name);
  }

  static findContact(contactToFind: Contact, contactList: Group, groupList: Group[]): Contact {
    let contact = Validator.checkIfExistContact(contactList, contactToFind);
    if (!contact) {
      groupList.forEach(group => {
        if (Validator.checkIfExistContact(group.contactList, contactToFind)) {
          return Validator.checkIfExistContact(group.contactList, contactToFind);
        }
      })
      return contact;
    }
    throw new Error('Contact not found!');
  }
}
