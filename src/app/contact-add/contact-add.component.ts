import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { DataService } from '../data.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-add.component.html',
  styleUrl: './contact-add.component.css',
})
export class ContactAddComponent {
  dataService = inject(DataService);

  contact!: Contact;

  ngOnInit(): void {
    this.contact = this.dataService.contactSignal() as Contact;
  }

  constructor(private router: Router) {}

  goList(): void {
    this.router.navigate(['']);
  }

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';

  addContact() {
    this.dataService.addContact(
      this.firstName,
      this.lastName,
      this.phoneNumber,
      this.email
    );
    console.log(this.firstName);
  }
}
