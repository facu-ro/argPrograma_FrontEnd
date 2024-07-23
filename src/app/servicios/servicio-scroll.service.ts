import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioScrollService {

  constructor() { }

  viewPosition(dic_clases:any):IntersectionObserver{

    return new IntersectionObserver((entries) => {
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // El elemento está en la vista
          
          dic_clases.vista.agregar.forEach((e)=>{
             
            (entry.target as HTMLElement).classList.add(e);          
          });

          dic_clases.vista.quitar.forEach((e)=>{
             
            (entry.target as HTMLElement).classList.remove(e);         
          });

              

        } else {
          //El elemento no esta a la vista
          dic_clases.noVista.agregar.forEach((e)=>{
             
            (entry.target as HTMLElement).classList.add(e);          
          });

          dic_clases.noVista.quitar.forEach((e)=>{
             
            (entry.target as HTMLElement).classList.remove(e);         
          });

        }

      });
    }, {
      // root: null,
      threshold: 0
    });
  }


  
}
