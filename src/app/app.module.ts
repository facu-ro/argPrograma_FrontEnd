import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

import { EditarExperienciaComponent } from './componentes/modals/experiencias/editar-experiencia/editar-experiencia.component';
import { AgregarExperienciaComponent } from './componentes/modals/experiencias/agregar-experiencia/agregar-experiencia.component';
import { AboutmeEditarComponent } from './componentes/modals/sobreMi/aboutme-editar/aboutme-editar.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ModalLoginComponent } from './componentes/modals/login/modal-login/modal-login.component';

import { ServicioExperienciaService } from './servicios/servicio-experiencia.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ServicioLoginService } from './servicios/servicio-login.service';

@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    SobreMiComponent,
    
    EditarExperienciaComponent,
    AgregarExperienciaComponent,
    AboutmeEditarComponent,
    ExperienciaComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
 // entryComponents: [ EditarExperienciaComponent],
  providers: [ServicioExperienciaService,ServicioLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
