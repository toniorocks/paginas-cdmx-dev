import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

	validForm: boolean = false;
	recordatorio_a_: boolean = false;
	descripcion: string = '';
	registroForm: FormGroup;

	constructor(private _fb: FormBuilder) { }

	ngOnInit(): void {
		
		this.registroForm = this._fb.group({
			correo: ['', Validators.required, Validators.email],
			numero: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
			descripcion:['', Validators.maxLength(500)],
			aviso:[false, Validators.required],
			//terminos:[false, Validators.required]
		});

		// this.registroForm.statusChanges.subscribe(()=>{
		// 	this.onValidate();
		// });

	}

	get f() { return this.registroForm.controls; }

	descripcionChange():void{
	}

	onValidate(): void {
		// this.f.value;
		// console.log(this.f.correo);
		// console.log(this.f.numero);
		// if(this.f.correo.valid && this.f.numero.valid){
		// 	console.log('val')
		// }

	}

	

	onSubmit(){}


}
