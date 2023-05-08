import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Estudio } from '../modelos/estudio';
import { ServicioLoginService } from './servicio-login.service';

import {map,tap} from "rxjs/operators"
import { environment } from 'src/environments/environment';


@Injectable()
export class ServicioEducacionService {

    
    dato:any;

   

    //http://localhost:8080 'https://portfolio-back-rywe.onrender.com/api/educacion/'
    private url:string='http://localhost:8080/api/educacion/';

    private obser= new Subject<Estudio[]>();
  

    constructor(private http:HttpClient, private servicio_login:ServicioLoginService) { }




   
   
    get getEstadoLogin():Observable<boolean>{

        return this.servicio_login.getEstadoLogin
 
   }
 

   getDatos():Observable<Estudio[]> {
    
        return  this.http.get<Estudio[]>(this.url + 'verEducacion/')
            
            .pipe(
                
                tap( data=>{
                        
                    this.obser.next(data);
                    
                }),
                        
                
            )
               
    }


    editar(datos:Estudio):Observable<Estudio>{

        this.dato=datos
        console.log(datos)
        
        return  this.http.put<Estudio>(this.url+'editarExperencia',datos)

            .pipe(
                
                tap( data=>{
               
                    this.getDatos().subscribe()
           
                })     
            )
    
    }


    agregar(dato:Estudio):Observable<Estudio>{

       return  this.http.post<Estudio>(this.url+ 'nuevaExperencia-Persona/'+'5', dato)
       
            .pipe(
                
                tap( data=>{
            
                  this.getDatos().subscribe()
        
                })
            )
    }



    borrar(dato:Estudio):Observable<any>{

        console.log(dato.id_estudio)
        return this.http.delete<any>(this.url+'borrarExperiencia/'+ dato.id_estudio)

                .pipe(
                    tap( data=>{
            
                        this.getDatos().subscribe()
        
                    })
                )
    }






}
