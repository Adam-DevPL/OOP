import { Contact } from "../Contact/Contact";
import { Group } from "../Group/Group";
import { Validator } from "../Validator/validator";

export class ModifyGroup {
  static handleAddContact(contact: Contact, group: Group | Contact[]) {
    if (group && !Validator.checkIfExistContact(group, contact)) {
      if (group instanceof Group) {
        group.contactList.push(contact);
      } else {
        group.push(contact);
      }    
    }
  }

  static handleRemoveContact(contactToDelete: Contact, group: Group | Contact[]) {
    if (group && Validator.checkIfExistContact(group, contactToDelete)) {
      if (group instanceof Group) {
        group.contactList = [...group.contactList.filter(contact => contact.id !== contactToDelete.id)]
      } else {
        group = [...group.filter(contact => contact.id !== contactToDelete.id)]
      }
    }
  }
}
