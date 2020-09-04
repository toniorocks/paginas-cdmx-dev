import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare const $: any;
declare const grecaptcha: any;

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


	accesoForm: FormGroup;

	accesoActive: boolean;
	registroActive: boolean;
	ayudaActive: boolean;

	constructor() { }

	ngOnInit(): void {

		this.accesoActive = true;
		$("#registro").hide();
		$("#ayuda").hide();

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

	login(): void {

		this.deactiveAll();
		this.accesoActive = true;
		$("#acceso").show('slow');

	}

	registro(): void {

		this.deactiveAll();
		this.registroActive = true;
		$("#registro").show('slow');

	}

	ayuda(): void {

		this.deactiveAll();
		this.ayudaActive = true;
		$("#ayuda").show('slow');

	}

	deactiveAll(): void {

		$(".modulo-acceso").hide();
		this.accesoActive = false;
		this.registroActive = false;
		this.ayudaActive = false;

	}

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
