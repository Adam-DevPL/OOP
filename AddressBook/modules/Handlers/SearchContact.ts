import { Contact } from "../Contact/Contact";
import { Group } from "../Group/Group";
import { Validator } from "../Validator/validator";

export class SearchContact {
  static searchContact(
    searchedPhrase: string,
    groupsList: Group[],
    contactsList: Group
  ): Contact[] {
    const resultContacts: Contact[] = [];
    if (groupsList) {
      groupsList.filter((group) =>
        group.contactList.filter((contact) =>
          Object.values(contact).filter((value) => {
            const result = value.includes(searchedPhrase);
            if (result) {
              if (!Validator.checkIfExistContact(group.contactList, contact)) {
                resultContacts.push(contact);
              }
            }
          })
        )
      );
    }
    if (contactsList) {
      contactsList.contactList.filter((contact) =>
        Object.values(contact).filter((value) => {
          const result = value.includes(searchedPhrase);
          if (result) {
            if (!Validator.checkIfExistContact(contactsList, contact)) {
              resultContacts.push(contact);
            }
          }
        })
      );
    }

    return resultContacts;
  }
}
