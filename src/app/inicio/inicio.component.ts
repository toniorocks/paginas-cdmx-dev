import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

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
	verAviso_:boolean = false;

	constructor(private _fb: FormBuilder) { }

	ngOnInit(): void {
		
		this.registroForm = this._fb.group({
			correo: ['', Validators.required],
			numero: ['', Validators.required],
			descripcion:['', Validators.maxLength(500)],
			aviso:[false, Validators.required],
			//terminos:[false, Validators.required]
		});
		document.getElementById('recordatorio-aviso').style.display = 'none';
		this.registroForm.statusChanges.subscribe(()=>{
			this.onValidate();
		});

	}

	get f() { return this.registroForm.controls; }

	onValidate(): void {
		if(this.f.correo.valid && this.f.numero.valid){
			document.getElementById('recordatorio-aviso').style.display = 'initial';
		}

		if(this.f.aviso.value == true){
			document.getElementById('recordatorio-aviso').style.display = 'none';
			document.getElementById('alerta-recordatorio').style.display = 'none';
		}

		if(this.f.valid){

			this.validForm = true;

		}


	}

	verAviso():void{
		this.verAviso_ = true;
		$("#avisoModal").modal('show');
		document.getElementById('alerta-recordatorio').style.display = 'none';
	}

	aceptarAviso(){
		this.registroForm.controls.aviso.setValue(true);
	}

	onSubmit(){

	}


}
