import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `
    <div
      class="container border-bottom border-success border-black border-opacity-25"
    >
      <h1 class="align-self m-3 d-flex justify-content-center">
        <b>Scegli la pizza che vuoi ordinare!</b>
      </h1>
    </div>
    <div class="m-3 d-flex justify-content-center">
      <div class="d-flex flex-column">
        <div>
          <h2>Carrello</h2>
        </div>
        <div class="">
          <button class="mt-5 mb-4 btn btn-primary" style="margin-left: 15px;">
            Carrello
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class CardsComponent {}
