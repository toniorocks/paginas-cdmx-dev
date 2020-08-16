import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlanesComponent } from './planes/planes.component';
import { InfoComponent } from './info/info.component';
import { TerminosComponent } from './terminos/terminos.component';

const routes: Routes = [
	{ path: '', component: InicioComponent },
	{ path: 'planes', component: PlanesComponent },
	{ path: 'info', component: InfoComponent },
	{ path: 'terminos', component: TerminosComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
