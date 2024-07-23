import { AfterViewInit, Component, HostListener, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';



import { Presentacion } from 'src/app/modelos/presentacion';

import Typed from 'typed.js';


import { ServicioPresentacionService } from 'src/app/servicios/servicio-presentacion';
import { AboutmeEditarComponent } from '../modals/sobreMi/aboutme-editar/aboutme-editar.component';
import { ServicioScrollService } from 'src/app/servicios/servicio-scroll.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit,AfterViewInit {

  sobre_mi:Presentacion //=new Presentacion;

  //descripcion:string=this.sobre_mi.descripcion;

  EstadoLogin:boolean

  scrollPosition: number = 0;
  @ViewChild(AboutmeEditarComponent) compEditar;

  
  constructor(private servicio_presentacion:ServicioPresentacionService, 
              private scroll:ServicioScrollService) { 

   
  }

  ngOnInit(): void {

    let  dic_clases={
      vista:{
        agregar:["animate__rubberBand"],
        quitar:[]
      },
      
      noVista:{
        agregar:[],
        quitar:["animate__rubberBand"]
      }
    }
   
    const titulo:HTMLElement = document.getElementById('h3'); // Obtiene la referencia a la etiqueta figure
    this.scroll.viewPosition(dic_clases).observe(titulo); // Observa la etiqueta figure para detectar intersecciones

    // dic_clases={
    //   vista:{
    //     agregar:["animate__zoomIn"],
    //     quitar:[]//"animate__zoomOut"
    //   },
      
    //   noVista:{
    //     agregar:[],//"animate__zoomOut"
    //     quitar:["animate__zoomIn"]
    //   }
    // }


    const figure:HTMLElement = document.getElementById('figure-aos'); 
    this.scroll.viewPosition( dic_clases ).observe(figure); 


    dic_clases={
      vista:{
        agregar:["animate__bounce"],
        quitar:[]
      },
      
      noVista:{
        agregar:[],
        quitar:["animate__bounce"]
      }
    }

    const bienvenida:HTMLElement = document.getElementById('bienvenida'); 
    this.scroll.viewPosition( dic_clases ).observe(bienvenida); 


    

    this.servicio_presentacion.getObser.subscribe(datos => {
      
      this.sobre_mi=datos;
    
    });
   

    this.servicio_presentacion.getEstadoLogin.subscribe(data=>{

      this.EstadoLogin=data
    })

    const typed = new Typed('#escritura', {
      strings: ['<i>Analista de sistemas</i>, ', '<i>Desarrollador FullStack.</i>'],
      typeSpeed: 200,
      loop:true
    });
    
    // window.onscroll = function() {
    //   console.log("Vertical: " + window.scrollY);
    //   console.log("Horizontal: " + window.scrollX);

    // };

  }

  ngAfterViewInit():void{}



 

  
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
