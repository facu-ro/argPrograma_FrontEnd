import { Component, OnInit, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';

import { ServicioProyectoService } from 'src/app/servicios/servicio-proyecto.service';
import { EditarProyectoComponent } from '../modals/proyectos/editar-proyecto/editar-proyecto.component';


declare function iniciarSwipper();


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {
  

  datosProyectos:Proyecto[];


  datosObservable$=this.servicio_proyecto

  EstadoLogin:boolean

  @ViewChild(EditarProyectoComponent) compEditar;


  constructor(private servicio_proyecto:ServicioProyectoService){ }




  ngOnInit() {

    this.servicio_proyecto.getEstadoLogin.subscribe(data=>{

      this.EstadoLogin=data

    })


    this.servicio_proyecto.getObser.subscribe(data=>{

      this.datosProyectos=data;

    })


    iniciarSwipper()

  
  }







  ItemProyecto(item) {
    
    
   this.compEditar.bandera_boton=true

   
    this.compEditar.form.setValue({
      descripcion:item.descripcion,
      id_proyecto:item.id_proyecto,
      imagen:item.imagen,
     
      url:item.url,
      titulo:item.titulo,           
      })
    
    
  }



  agregarProyecto(){

      this.compEditar.bandera_boton=false
      this.compEditar.form.setValue({
        descripcion:"",
        id_proyecto:"",
        imagen:"",
        url:'',
        titulo:'',            
        })
    
  
  }



  getDatos():void{

    this.servicio_proyecto.getObser.subscribe(data=>{

      this.datosProyectos=data;

    })

  }


  borrarProyecto(proyecto:Proyecto){

   

    this.servicio_proyecto.borrar(proyecto)

  
  }




}
