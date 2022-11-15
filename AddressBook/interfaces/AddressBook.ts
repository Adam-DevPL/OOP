import { Contact } from "../modules/Contact/Contact";
import { Group } from "../modules/Group/Group";

export interface IAddressBook {
  contactList: Group;
  groupList: Group[];
  addContact: (contact: Contact, group: Group) => void;
  removeContact: (contactToDelete: Contact, group: Group) => void;
  addGroup: (group: Group) => void;
  removeGroup: (groupToRemove: Group) => void;
  modifyGroupProperty: (key: string, newGroupValue: string, group: Group) => void;
  modifyContactProperty: (key: string, newContactValue: string, contact: Contact) => void;
  searchForContact: (searchedPhrase: string) => Contact[];
}
