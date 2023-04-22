import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


import { Experiencia } from 'src/app/modelos/experiencia';

import { ServicioExperienciaService } from 'src/app/servicios/servicio-experiencia.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { EditarExperienciaComponent } from '../modals/experiencias/editar-experiencia/editar-experiencia.component';

declare var $:any


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  
  experiencia:Experiencia[];

  Datos:Experiencia[];

  @ViewChild("boton") boton:ElementRef
 
  @ViewChild(EditarExperienciaComponent) compEditar;



 //datosObservable$:Observable<Experiencia[]>/*=this.servicio_experiencia.getDatosExperiencia*/
  datosObservable$=this.servicio_experiencia.getDatosExperiencia

  EstadoLogin:boolean

  constructor(
              private servicio_experiencia:ServicioExperienciaService,
              private ruta:ActivatedRoute, 
              private formBuilder:FormBuilder,
             // private servicio_login:ServicioLoginService
            ){

   // this.EstadoLogin=this.servicio_experiencia.getEstadoLogin();
   //this.datosObservable$=this.servicio_experiencia.getDatosExperiencia

  }

  
  
  ngOnInit():void{

    this.servicio_experiencia.getEstadoLogin.subscribe(data=>{

      this.EstadoLogin=data

      
    })

   
    
   
  }



  agregarExperiencia(){

    this.compEditar.bandera_boton=false
    this.compEditar.form.setValue({
      descripcion:"",
      id_experiencia:"",
      imagen:"",
      puesto:'',
      inicio:'',
      fin:'',
      url:'',
      empresa:'',            
      })
  }



  ItemExperiencia(item) {
    
    //this.selectedItem= item;

   // $("#experiencia-editar").modal("toggle");
    
   this.compEditar.bandera_boton=true

   
    this.compEditar.form.setValue({
      descripcion:item.descripcion,
      id_experiencia:item.id_experiencia,
      imagen:item.imagen,
      puesto:item.puesto,
      inicio:item.inicio,
      fin:item.fin,
      url:item.url,
      empresa:item.empresa,           
      })
    
    //this.boton.nativeElement.setAttribute("data-bs-toggle","modal")
    //this.boton.nativeElement.setAttribute("data-bs-target","#experiencia-editar") 
   /*this.form.setValue({
      descripcion:item.descripcion,
      id:item.id,
      imagen:item.imagen              
      })*/
  }


  
  limpiar():void{

    console.log("limpiar")
  }

  



  borrar(dato:Experiencia){

    this.servicio_experiencia.borrar(dato).subscribe(d=>{})

  }

    /*

  ver_experiencia(experiencia):void{

    experiencia.map( i=> console.log(i.descripcion))

    for(let i=0; i<this.experiencia.length;i++){

      console.log(i + " "+ this.experiencia[i].sobre_mi)
    }*/

    /*
    let c:number=0;
    for(let i of this.experiencia){
      console.log(i.descripcion)
      c++;
    }


  }
    */
  
}
