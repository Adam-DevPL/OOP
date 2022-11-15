import { IAddressBook } from "../../interfaces/AddressBook";
import { IContact } from "../../interfaces/Contact";
import { IGroup } from "../../interfaces/Group";
import { Group } from "../Group/Group";
import { SearchContact } from "../Handlers/SearchContact";
import { Validator } from "../Validator/validator";

export class AddressBook implements IAddressBook {
  contactList: IGroup = new Group();
  groupList: IGroup[] = [];

  addContact(contact: IContact, group: IGroup = this.contactList) {
    group.addContact(contact);
  }

  removeContact(contactToDelete: IContact, group: IGroup = this.contactList) {
    group.removeContact(contactToDelete);
  }

  addGroup(group: IGroup) {
    if (!Validator.checkIfExistGroup(this.groupList, group)) {
      this.groupList.push(group);
    }
  }

  removeGroup(groupToRemove: IGroup) {
    if (Validator.checkIfExistGroup(this.groupList, groupToRemove)) {
      this.groupList = [
        ...this.groupList.filter((group) => group.id !== groupToRemove.id),
      ];
    }
  }

  modifyGroupProperty(key: string, newGroupValue: string, group: IGroup) {
    if (Validator.checkIfExistGroup(this.groupList, group))
      group.changeProperty(key, newGroupValue);
  }

  modifyContactProperty(key: string, newContactValue: string, contact: IContact) {
    if (Validator.findContact(contact, this.contactList, this.groupList)) {
      contact.changeProperty(key, newContactValue);
    }
  }

  searchForContact(searchedPhrase: string): IContact[] {
    return SearchContact.searchContact(
      searchedPhrase,
      this.groupList,
      this.contactList
    );
  }
}
