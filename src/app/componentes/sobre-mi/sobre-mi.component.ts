import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ServicioExperienciaService } from 'src/app/servicios/servicio-experiencia.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  
  sobre_mi:any;

  c$:Observable<any>;
  
  constructor(private servicio_experiencia:ServicioExperienciaService) { }

  ngOnInit(): void {

  /* this.c$=this.servicio_experiencia.getDatos();
  

    this.c$.subscribe(datos => {
      
    
      this.sobre_mi=datos.sobre_mi;
    });
    */

    
  }


}
