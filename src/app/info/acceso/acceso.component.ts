import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare const $: any;
declare const grecaptcha: any;

@Component({
	selector: 'app-acceso',
	templateUrl: './acceso.component.html',
	styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

	accesoForm: FormGroup;

	constructor() { }

	ngOnInit(): void {

		this.accesoForm = new FormGroup({
			correo: new FormControl('', [
				Validators.required,
				Validators.email,
				Validators.maxLength(100)
			]),
			contrasena: new FormControl('', [
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(10)
			]),
		});

	}

	get correo() { return this.accesoForm.get('correo'); } //Con estos métodos el formulario del front puede acceder a las propiedades del componente
	get contrasena() { return this.accesoForm.get('contrasena'); } //Con estos métodos el formulario del front puede acceder a las propiedades del componente

	onSubmit(): void {

		let context = this;

		grecaptcha.ready(function () {
			grecaptcha.execute('6Lcs08cZAAAAAMubo9ibuTHZgP1wMUFseQUNWqHY', { action: 'submit' }).then(function (token) {
				// Add your logic to submit to your backend server here.
				console.warn(context.accesoForm.value);
			});
		});

	}


}
