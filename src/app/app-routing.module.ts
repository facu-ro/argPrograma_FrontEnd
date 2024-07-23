import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { IndexComponent } from './componentes/index/index/index.component';
import { EditarExperienciaComponent } from './componentes/modals/experiencias/editar-experiencia/editar-experiencia.component';
import { ModalLoginComponent } from './componentes/modals/login/modal-login/modal-login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';


const routes: Routes = [
  //{path: 'editExperiencia/:id',  component: EditarExperienciaComponent},
  //{path:"modalLoguin", component:ModalLoginComponent }

  {path:'',component:IndexComponent}, //AppComponent
  {path:'experiencia',component:ExperienciaComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'contacto',component:ContactoComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',

  anchorScrolling: 'enabled',

  scrollOffset: [0, 64]})],
  exports: [RouterModule]
})



export class AppRoutingModule {


  

 }
