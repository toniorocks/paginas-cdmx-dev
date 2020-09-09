import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlanesComponent } from './planes/planes.component';
import { InfoComponent } from './info/info.component';
import { TerminosComponent } from './terminos/terminos.component';
import { AvisoComponent } from './aviso/aviso.component';
import { AccesoComponent } from './info/acceso/acceso.component';
import { RegistroComponent } from './info/registro/registro.component';

const routes: Routes = [
	{ path: '', component: InicioComponent },
	{ path: 'planes', component: PlanesComponent },
	{
		path: 'info', component: InfoComponent, children: [
			{ path: '', component: AccesoComponent },
			{ path: 'acceso', component: AccesoComponent },
			{ path: 'registro', component: RegistroComponent },
		]
	},
	{ path: 'terminos', component: TerminosComponent },
	{ path: 'aviso', component: AvisoComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
