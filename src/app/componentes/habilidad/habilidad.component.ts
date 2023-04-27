import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Habilidad } from 'src/app/modelos/habilidad';
import { ServicioHabilidadService } from 'src/app/servicios/servicio-habilidad.service';
import { EditarHabilidadComponent } from '../modals/habilidad/editar-habilidad/editar-habilidad.component';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

  datosHabilidad:Habilidad[]

  EstadoLogin:boolean

  @ViewChild(EditarHabilidadComponent) compEditar;


  constructor(private servicio_habilidad:ServicioHabilidadService){ }

  ngOnInit() {

    this.servicio_habilidad.getEstadoLogin.subscribe(data=>{

      this.EstadoLogin=data;
    })


    this.servicio_habilidad.getObser.subscribe(data=>{

      this.datosHabilidad=data;

      for (let i of this.datosHabilidad){
        
        console.log("la descripcion es "+i.descripcion_habilidad)
        console.log("el porcentaje es "+i.porcentaje)
      }

      

    })

  }


  ItemHabilidad(item:Habilidad) {
    
    
    this.compEditar.bandera_boton=true
 
    console.log("la descripcion es "+item.descripcion_habilidad)

     this.compEditar.form.setValue({
        
       id_habilidad:item.id_habilidad,

       descripcion_habilidad:item.descripcion_habilidad,

       porcentaje:item.porcentaje,
       imagen:item.imagen
        
       })
     
     
   }
 
 
 
   agregarHabilidad(){
 
       this.compEditar.bandera_boton=false
       
       this.compEditar.form.setValue({
         descripcion_habilidad:"",
         id_habilidad:"",
         imagen:"",
         porcentaje:""            
        
        })
     
   
   }
 
 
 
   getDatos():void{
 
     this.servicio_habilidad.getObser.subscribe(data=>{
 
       this.datosHabilidad=data;
 
     })
 
   }
 
 
   borrarHabilidad(habilidad:Habilidad){
 
     this.servicio_habilidad.borrar(habilidad)
 
   }


}
