import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './componentes/index/index/index.component';
import { EditarExperienciaComponent } from './componentes/modals/experiencias/editar-experiencia/editar-experiencia.component';
import { ModalLoginComponent } from './componentes/modals/login/modal-login/modal-login.component';


const routes: Routes = [
  //{path: 'editExperiencia/:id',  component: EditarExperienciaComponent},
  //{path:"modalLoguin", component:ModalLoginComponent }

  {path:'',component:IndexComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {


  

 }
