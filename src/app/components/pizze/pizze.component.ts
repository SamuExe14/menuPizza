import { Component } from '@angular/core';
import { Pizza } from 'src/app/models/jsonPizza-state';
import { PizzaState } from 'src/app/state/pizza-state';
@Component({
  selector: 'app-pizze',
  template: `
    <div
      class="container border-top border-success border-black border-opacity-25"
    >
      <div class="card mt-3" style="width: 18rem;" *ngFor="let element of ">
        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PizzeComponent {
}
