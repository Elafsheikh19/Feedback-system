import { Routes } from '@angular/router';
import { Form } from './form/form';
import { List } from './list/list';

export const routes: Routes = [
  { path: 'form', component: Form },
  { path: 'list', component: List },
  { path: '', redirectTo: 'form', pathMatch: 'full' }
];
