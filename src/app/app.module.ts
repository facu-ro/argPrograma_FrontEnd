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
import { IndexComponent } from './componentes/index/index/index.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ServicioProyectoService } from './servicios/servicio-proyecto.service';
import { EditarProyectoComponent } from './componentes/modals/proyectos/editar-proyecto/editar-proyecto.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { EditarHabilidadComponent } from './componentes/modals/habilidad/editar-habilidad/editar-habilidad.component';
import { ServicioHabilidadService } from './servicios/servicio-habilidad.service';
import { ServicioPresentacionService } from './servicios/servicio-presentacion';
import { LinksComponent } from './componentes/links/links.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    SobreMiComponent,
    
    EditarExperienciaComponent,
    AgregarExperienciaComponent,
    AboutmeEditarComponent,
    ExperienciaComponent,
    ModalLoginComponent,
    ProyectosComponent,

    EditarProyectoComponent,
    HabilidadComponent,
    EditarHabilidadComponent,
    IndexComponent,
    LinksComponent,
    PresentacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
 // entryComponents: [ EditarExperienciaComponent],
  providers: [ServicioExperienciaService,ServicioLoginService,ServicioProyectoService, ServicioHabilidadService, ServicioPresentacionService],
  bootstrap: [AppComponent]//IndexComponent
})
export class AppModule { }
