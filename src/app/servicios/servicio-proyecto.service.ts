import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {map,tap} from "rxjs/operators"
import { environment } from 'src/environments/environment';

import { Proyecto } from '../modelos/proyecto';
import { ServicioLoginService } from './servicio-login.service';

@Injectable()
export class ServicioProyectoService {

    datosProyectos:Proyecto[];

    //'http://localhost:8080/api/proyecto/' 
    //'https://portfolio-back-rywe.onrender.com/api/proyecto/'
    //../assets/json/datos.json

    private url:string='../assets/json/datos.json';


    
    private obser= new Subject<Proyecto[]>();
  

    constructor(private http:HttpClient, private servicio_login:ServicioLoginService) { 

        this.getDatos()
    }

   

   
    get getEstadoLogin():Observable<boolean>{

        return this.servicio_login.getEstadoLogin
 
    }

   
   
   get getObser():Observable<Proyecto[]>{

    return this.obser.asObservable();
   }


    setObser(datos:Proyecto[]){

       // this.datosProyectos.push(datos)
        this.obser.next(datos)

   }
 
   
   getDatos() {
    
         this.http.get<Proyecto[]>(this.url ).subscribe(data=>{ //+ 'verProyectos/'

            this.datosProyectos=data["proyectos"];
            this.setObser( this.datosProyectos);

        })
            
               
    }


    editar(datos:Proyecto){


       this.http.put<Proyecto>(this.url+'editarProyecto/',datos).subscribe(data=>{

            const indice= this.datosProyectos.findIndex(i => datos.id_proyecto == i.id_proyecto)

            this.datosProyectos[indice]=datos;

            this.setObser(this.datosProyectos)
            
       })

    
    }


    agregar(dato:Proyecto){

        this.http.post<Proyecto>(this.url+ 'nuevaProyecto-Presentacion/'+'1', dato).subscribe(data=>{

            this.getDatos();
        })
       
    }


    borrar(dato:Proyecto){

        console.log(dato.id_proyecto)
       
        this.http.delete<any>(this.url+'borrarProyecto/'+ dato.id_proyecto).subscribe(data=>{

            this.getDatos();
        })

    }



}
