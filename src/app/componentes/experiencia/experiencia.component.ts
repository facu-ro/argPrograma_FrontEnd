import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';


import { Experiencia } from 'src/app/modelos/experiencia';

import { ServicioExperienciaService } from 'src/app/servicios/servicio-experiencia.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { ServicioScrollService } from 'src/app/servicios/servicio-scroll.service';
import { EditarExperienciaComponent } from '../modals/experiencias/editar-experiencia/editar-experiencia.component';

declare var $:any

declare function gridSwiper();

declare function miGrilla();

declare function particula(a?:any,b?:any)

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit, AfterViewInit {
  
  Datos:Experiencia[];

  @ViewChild("boton") boton:ElementRef

  @ViewChild("accordionExample") acordion:ElementRef
 
  @ViewChild(EditarExperienciaComponent) compEditar;


  datosObservable$=this.servicio_experiencia.getDatosExperiencia 

  experiencias:Experiencia[]

  EstadoLogin:boolean

  constructor(
              private servicio_experiencia:ServicioExperienciaService,
              private ruta:ActivatedRoute, 
              private formBuilder:FormBuilder,
             // private servicio_login:ServicioLoginService
             private scroll:ServicioScrollService
            ){

          //    window.addEventListener("load", ()=>{console.log("entro al evento"); this.generarTargetId()}  )
              
             
  }


  
  
  ngOnInit():void{

    

    let  dic_clases={
      vista:{
        agregar:["animate__lightSpeedInRight"],
        quitar:["animate__lightSpeedOutLeft"]
      },
      
      noVista:{
        agregar:["animate__lightSpeedOutLeft"],
        quitar:["animate__lightSpeedInRight"]
      }
    }
   
    const titulo:HTMLElement = document.querySelector('#h2-titulo'); // Obtiene la referencia a la etiqueta figure
    this.scroll.viewPosition(dic_clases).observe(titulo); // Observa la etiqueta figure para detectar intersecciones


    
    this.servicio_experiencia.getEstadoLogin.subscribe(data=>{

      this.EstadoLogin=data

      
    })


    // this.servicio_experiencia.getDatosExperiencia.subscribe(data=>{

    //   this.experiencias=data;

    //   console.log("entro al servicio experiencia"); 
      
    //   // this.generarTargetId()

    // })


  }


  ngAfterViewInit():void{}

  

  // generarTargetId(){

  //   console.log("entro a la funcion")
    
  //   let buttons=document.querySelectorAll(".accordion-button");
  //   let collapse=document.querySelectorAll(".accordion-collapse");
  //   let header=document.querySelectorAll(".accordion-header");
  //   let body=document.querySelectorAll(".accordion-body");

  //   let experiencia=document.querySelector("#accordionExample .accordion-header .accordion-button")

  //   console.log("hay " + buttons.length + " botones")

  //   for(let i=0; i < buttons.length ; i++ ){

  //     // console.log("#item-acordeon_" + i)
      
  //     header[i].setAttribute("id","heading_"+i); 
      
  //     console.log("tiene el atributo?: " + buttons[i].hasAttribute("data-bs-target"))
  //     if( !buttons[i].hasAttribute("data-bs-target") || !buttons[i].hasAttribute("aria-controls")){
  //       buttons[i].setAttribute("data-bs-target","#item-acordeon_" + i );
  //       buttons[i].setAttribute("aria-controls","item-acordeon_" + i );  

  //       console.log("tiene el atributo?: " + buttons[i].hasAttribute("data-bs-target"))
  //     }

      
  //     // collapse[i].setAttribute("id","item-acordeon_" + i );

  //     body[i].setAttribute("aria-labelledby", "heading_"+i);
      
  //   }
    
  // }



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
   
  }


  
  limpiar():void{

    console.log("limpiar")
  }

  



  borrar(dato:Experiencia){

    this.servicio_experiencia.borrar(dato).subscribe(d=>{})

  }


  
}
