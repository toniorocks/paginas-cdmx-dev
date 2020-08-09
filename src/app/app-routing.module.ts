import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlanesComponent } from './planes/planes.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
	{ path: '', component: InicioComponent },
	{ path: 'planes', component: PlanesComponent },
	{ path: 'info', component: InfoComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
