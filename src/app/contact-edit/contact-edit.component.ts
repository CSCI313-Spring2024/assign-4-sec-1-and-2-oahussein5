import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-edit',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css',
})
export class ContactEditComponent {
  dataService = inject(DataService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  index: number = -1;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idxStr = params.get('id');
      this.index = idxStr ? +idxStr : -1;

      const contact = this.dataService.contact[this.index];
      if (contact) {
        ({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
        } = contact);
      } else {
        console.error(`Invalid contact index: ${this.index}`);
        this.router.navigate(['']);
      }
    });
  }

  updateContact(): void {
    this.dataService.upContact(
      this.firstName,
      this.lastName,
      this.phoneNumber,
      this.email,
      this.index
    );
  }

  goList(): void {
    this.router.navigate(['']);
  }
}
