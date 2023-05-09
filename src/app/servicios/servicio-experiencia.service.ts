import { Injectable } from '@angular/core';

import { Observable, Subject, BehaviorSubject } from 'rxjs';

// import 'rxjs'/'Rx'
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import {map,tap} from "rxjs/operators"
import { Experiencia } from '../modelos/experiencia';
import { Persona } from '../modelos/persona';
import { ServicioLoginService } from './servicio-login.service';
import { environment } from 'src/environments/environment';



@Injectable({providedIn:'root'}) //{provideIn:'root'}


export class ServicioExperienciaService {

    
   dato:any;
  // http://localhost:8080 'https://portfolio-back-rywe.onrender.com/api/experiencia/'
  private url:string='https://portfolio-back-rywe.onrender.com/api/experiencia/';

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
    
      return  this.http.get<Experiencia[]>(this.url + 'verExperiencias/')
        .pipe(
             tap( data=>{
                    
                    this.obser.next(data);
                
                }),
                    
            
            )
                 
    }
    

    editar(datos:Experiencia):Observable<Experiencia>{

        this.dato=datos
        console.log(datos)
        
       return  this.http.put<Experiencia>(this.url+'editarExperencia',datos)

            .pipe(
                tap( data=>{
               
                    this.getDatos().subscribe()
           
                })
               
       
       )
    

    }


    agregar(dato:Experiencia):Observable<Experiencia>{

       return  this.http.post<Experiencia>(this.url+ 'nuevaExperencia-Presentacion/'+'1', dato)
       
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
        return this.http.delete<any>(this.url+'borrarExperiencia/'+ dato.id_experiencia)

                .pipe(
                    tap( data=>{
            
                        this.getDatos().subscribe()
        
                    })
                )
    }

    




}
