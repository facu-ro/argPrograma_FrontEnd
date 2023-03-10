import { Injectable } from '@angular/core';

import { Observable, Subject, BehaviorSubject } from 'rxjs';

// import 'rxjs'/'Rx'
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import {map,tap} from "rxjs/operators"
import { Experiencia } from '../modelos/experiencia';
import { Persona } from '../modelos/persona';
import { ServicioLoginService } from './servicio-login.service';



@Injectable({providedIn:'root'}) //{provideIn:'root'}


export class ServicioExperienciaService {

    
    dato:any;

    

   private obser= new Subject<Experiencia[]>();

   //private estadoLogin=this.servicio_login.getEstadoLogin

    
    constructor(private http:HttpClient, private servicio_login:ServicioLoginService) { 

      this.getDatos().subscribe()

         
    
    }


 get getEstadoLogin():Observable<boolean>{

       return this.servicio_login.getEstadoLogin

  }


    //this.http.get('../assets/json/experiencia.json');

    //http://localhost:8080/     //  "proxyConfig": "src/assets/json/proxy.conf.json"

    //--proxy-config ./assets/json/proxy.conf.json"



    
    

    get getDatosExperiencia(){
        
        
        return this.obser.asObservable()
    }


    //:Observable<Experiencia[]>
    getDatos():Observable<Experiencia[]> {
    
      return  this.dato=this.http.get<Experiencia[]>('http://localhost:8080/experiencia/verExperiencias/')
        .pipe(
             tap( data=>{
                    
                    this.obser.next(data);
                
                }),
                    
            
            )
                 
    }
    

    editar(datos:Experiencia):Observable<Experiencia>{

        this.dato=datos
        console.log(datos)
        
       return  this.http.put<Experiencia>('http://localhost:8080/experiencia/editarExperencia',datos)

            .pipe(
                tap( data=>{
               
                    this.getDatos().subscribe()
           
                })
               
       
       )
    

    }


    agregar(dato:Experiencia):Observable<Experiencia>{

       return  this.http.post<Experiencia>('http://localhost:8080/experiencia/nuevaExperencia-Persona/'+'5', dato)
       
            .pipe(
                    tap( data=>{
            
                        this.getDatos().subscribe()
        
                    })
                )
    }


    borrar(dato:Experiencia):Observable<any>{

      /* const httpOptions = {
            headers: new HttpHeaders(
              {
                'Content-Type': 'application/json',
                'Authorization': 'Basic'
                
                
              }
            )
          };*/

          console.log(dato.id_experiencia)
        return this.http.delete<any>('http://localhost:8080/experiencia/borrarExperiencia/'+ dato.id_experiencia)

                .pipe(
                    tap( data=>{
            
                        this.getDatos().subscribe()
        
                    })
                )
    }

    




}
