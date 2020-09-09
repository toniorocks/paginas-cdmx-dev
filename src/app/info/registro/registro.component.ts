import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { passwordMatch } from '../../shared/custom-validators.directive';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	registroForm: FormGroup;

	constructor(private _fb: FormBuilder) { }

	ngOnInit(): void {

		this.registroForm = this._fb.group({
			correo: ['', Validators.required, Validators.email, Validators.maxLength(50)],
			pass: ['', Validators.required, Validators.minLength(6), Validators.maxLength(10)],
			confirma: ['', Validators.required, Validators.minLength(6), Validators.maxLength(10)],
			terminos: [false, Validators.required],
			privacidad: [false, Validators.required]
		}, {
			validators: passwordMatch
		})

	}

	// convenience getter for easy access to form fields
	get f() { console.warn(this.registroForm); return this.registroForm.controls; }

	onSubmit() {
		// stop here if form is invalid
		if (this.registroForm.invalid) {
			return;
		}

		console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registroForm.value))
	}

}
