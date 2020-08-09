import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { Router } from '@angular/router';

declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'cdmx-web-pages';
	constructor(private route: Router) {
		$(() => {
			$(".animate-button").on("click", () => {
				anime({
					targets: '.css-selector-demo .el',
					translateX: 250
				});
			})
		})
	}

	inicio() {
		this.route.navigate(['/']);
	}

	planes() {
		this.route.navigate(['/planes'])
	}
	informacion() {
		this.route.navigate(['/info'])
	}
	contactanos() { }

}
