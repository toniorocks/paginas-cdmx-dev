import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlanesComponent } from './planes/planes.component';
import { InfoComponent } from './info/info.component';
import { AvisoComponent } from './aviso/aviso.component';
import { TerminosComponent } from './terminos/terminos.component';
import { AccesoComponent } from './info/acceso/acceso.component';
import { RegistroComponent } from './info/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PlanesComponent,
    InfoComponent,
    AvisoComponent,
    TerminosComponent,
    AccesoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
