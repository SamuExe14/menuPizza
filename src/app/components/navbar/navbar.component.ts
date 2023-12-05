import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	template: `
		<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
			<img
				style="width:70px"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4Ri7ZUEvIOvC-m68TzRL1r3H2XaR5tAFxPmsGZXTdg&s"
				alt=""
			/>
			<a class="navbar-brand" style="margin-left: 10px;" href="#"
				>Menù Pizza
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#"
							>Products <span class="sr-only">(current)</span></a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Contacts</a>
					</li>
				</ul>
			</div>
		</nav>
	`,
	styles: [],
})
export class NavbarComponent {}
