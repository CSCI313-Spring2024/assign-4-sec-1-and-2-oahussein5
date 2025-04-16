import { Component, inject, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { DataService } from '../data.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [NgFor],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  dataService = inject(DataService);

  contact: Contact[] = [];

  ngOnInit(): void {
    this.contact = this.dataService.contact;
  }

  constructor(private router: Router) {}

  goEdit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  goList(id: number): void {
    this.router.navigate(['', id]);
  }

  deleteContact(id: number) {
    this.dataService.delContact(id);
  }
}
