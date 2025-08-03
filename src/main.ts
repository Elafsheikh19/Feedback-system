import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { Form } from './app/form/form';
import { List } from './app/list/list';

const routes = [
  { path: '', component: Form },
  { path: 'list', component: List }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
