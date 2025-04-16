import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactAddComponent } from './contact-add/contact-add.component';

export const routes: Routes = [
  {
    path: 'edit/:id',
    component: ContactEditComponent,
    title: 'Edit Contact',
  },
  {
    path: '',
    component: ContactListComponent,
    title: 'Contact List',
  },
  {
    path: 'add',
    component: ContactAddComponent,
    title: 'Contact Add',
  },
];
