import { Injectable, signal } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './contact-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  contact = CONTACTS;

  //intilize array
  // CONTACTS: Contact[] = CONTACTS;

  //Contact Signal
  contactSignal = signal<Contact | undefined>(undefined);

  // add Contact
  addContact(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string
  ) {
    this.contact.push({ firstName, lastName, phoneNumber, email });
  }

  //edit contact
  // editContact(editContact: Contact) {
  //   let index = this.contact.findIndex((contact) => contact == editContact);

  //   if (index >= 0) {
  //     this.contact[index] = editContact;
  //   }
  // }

  // set contact
  // setContactById(id: number): void {
  //   let contact = this.contact.find((contact) => contact.id == id);
  //   this.contactSignal.set(contact as Contact);
  // }

  //delete contact
  delContact(id: number) {
    CONTACTS.splice(id, 1);
  }

  upContact(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    id: number
  ) {
    CONTACTS[id] = { firstName, lastName, phoneNumber, email };
  }

  // upContact(
  //   firstName: string,
  //   lastName: string,
  //   phoneNumber: string,
  //   email: string
  // ) {
  //   this.contact.push({ firstName, lastName, phoneNumber, email });
  // }

  //next id
  nextId = signal<number>(5);

  //CONTACTS
  // Contact: Contact[] = this.contact;
}
