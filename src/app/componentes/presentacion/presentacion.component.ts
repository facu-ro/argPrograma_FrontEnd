import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ServicioPresentacionService } from 'src/app/servicios/servicio-presentacion';
import { ServicioScrollService } from 'src/app/servicios/servicio-scroll.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  descripcion:string;
  imagen:string;

  constructor(private scroll:ServicioScrollService,
    private presentacion:ServicioPresentacionService) { }

  ngOnInit(): void {

    //AOS.init();    

    let dic_clases={
      vista:{
        agregar:["animate__jello"],
        quitar:[]
      },
      
      noVista:{
        agregar:[],
        quitar:["animate__jello"]
      }
    }

    const b:HTMLElement = document.getElementById('p'); 
    this.scroll.viewPosition( dic_clases ).observe(b); 

    this.presentacion.getObser.subscribe(d=>{
      this.descripcion=d.descripcion;
      this.imagen=d.imagen;
    })

  }



}
