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

  }


  Itemhabilidad(item) {
    
    
    this.compEditar.bandera_boton=true
 
    
     this.compEditar.form.setValue({
       descripcion:item.descripcion,
       id_habilidad:item.id_habilidad,
       imagen:item.imagen,
        
       porcentaje:item.porcentaje
       })
     
     
   }
 
 
 
   agregarHabilidad(){
 
       this.compEditar.bandera_boton=false
       this.compEditar.form.setValue({
         descripcion:"",
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
 
 
   borrarhabilidad(habilidad:Habilidad){
 
     this.servicio_habilidad.borrar(habilidad)
 
   }


}
