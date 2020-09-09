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

	accesoActive: boolean;
	registroActive: boolean;
	ayudaActive: boolean;

	constructor() { }

	ngOnInit(): void {

		this.accesoActive = true;
		$("#registro").hide();
		$("#ayuda").hide();

	}

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

}
