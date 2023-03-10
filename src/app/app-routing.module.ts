import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarExperienciaComponent } from './componentes/modals/experiencias/editar-experiencia/editar-experiencia.component';
import { ModalLoginComponent } from './componentes/modals/login/modal-login/modal-login.component';


const routes: Routes = [
  //{path: 'editExperiencia/:id',  component: EditarExperienciaComponent},
  //{path:"modalLoguin", component:ModalLoginComponent }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {


  

 }
