import { Injectable, signal } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './contact-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  contact = CONTACTS;

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

  //delete contact
  delContact(id: number) {
    CONTACTS.splice(id, 1);
  }

  //update contact
  upContact(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    id: number
  ) {
    CONTACTS[id] = { firstName, lastName, phoneNumber, email };
  }
}
