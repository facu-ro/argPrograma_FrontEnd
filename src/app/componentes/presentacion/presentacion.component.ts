import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ServicioScrollService } from 'src/app/servicios/servicio-scroll.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor(private scroll:ServicioScrollService) { }

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


  }

    // @HostListener('window:scroll', ['$event'])
  // oncroll(event: Event) {
  //   this.scrollPosition = window.scrollY || window.pageYOffset;
  //   console.log('Scroll position:', this.scrollPosition);
  // }

  // ngOnChanges():void{
  //   AOS.refresh() 
  // }



}
