import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Presentacion } from 'src/app/modelos/presentacion';


import { ServicioPresentacionService } from 'src/app/servicios/servicio-presentacion';
import { AboutmeEditarComponent } from '../modals/sobreMi/aboutme-editar/aboutme-editar.component';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit,AfterViewInit {

  
  sobre_mi:Presentacion=new Presentacion;

  //descripcion:string=this.sobre_mi.descripcion;

  EstadoLogin:boolean

  @ViewChild(AboutmeEditarComponent) compEditar;

  
  constructor(private servicio_presentacion:ServicioPresentacionService) { 

   
  }

  ngOnInit(): void {


    this.servicio_presentacion.getObser.subscribe(datos => {
      
    
      this.sobre_mi=datos;
    });
   

    this.servicio_presentacion.getEstadoLogin.subscribe(data=>{

      this.EstadoLogin=data
    })

    
  }

  ngAfterViewInit():void{

  
    
  }

  
  ItemPresentacion(item:Presentacion) {
    
    
    this.compEditar.bandera_boton=true
 
    
     this.compEditar.form.setValue({           

       fk_persona:item.fk_persona,
        descripcion:item.descripcion,
        banner:item.banner,
        nombre:item.nombre,
        apellido:item.apellido,
        foto:item.foto   
       })
          
  }
 
 
 
  agregarPresentacion(){
 
       this.compEditar.bandera_boton=false
       this.compEditar.form.setValue({
        fk_persona:"",
        descripcion:"",
        banner:"",
        nombre:"",
        apellido:"",
        foto:""            
         })
     
   
  }

  borrarPresentacion(Presentacion:Presentacion){

   

    this.servicio_presentacion.borrar(Presentacion).subscribe()

  
  }

}
