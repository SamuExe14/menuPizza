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
			<h2>
				<b> Carrello </b>
			</h2>
			<button class="d-flex justify-content-center ml-5" style="margin-left: 0px;">
				Carrello
			</button>
		</div>
	`,
	styles: [],
})
export class CardsComponent {}
