import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-cards></app-cards>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'menuPizza';
}
