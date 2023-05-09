

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {map,tap} from "rxjs/operators"
import { environment } from 'src/environments/environment';
import { Habilidad } from '../modelos/habilidad';

import { ServicioLoginService } from './servicio-login.service';

@Injectable()
export class ServicioHabilidadService {

   datosHabilidad:Habilidad[];

   

   //'http://localhost:8080/api/habilidad/' 'https://portfolio-back-rywe.onrender.com/api/habilidad/'
    private url:string='https://portfolio-back-rywe.onrender.com/api/habilidad/';

    private obser= new Subject<Habilidad[]>();
  

    constructor(private http:HttpClient, private servicio_login:ServicioLoginService) { 

        this.getDatos()
    }

   

   
    get getEstadoLogin():Observable<boolean>{

        return this.servicio_login.getEstadoLogin
 
    }

   
   
   get getObser():Observable<Habilidad[]>{

    return this.obser.asObservable();
   }


    setObser(datos:Habilidad[]){

       // this.datosHabilidad.push(datos)
        
        this.obser.next(datos)

   }
 
   //:Observable<Habilidad[]>
   getDatos() {
    
         this.http.get<Habilidad[]>(this.url + 'verHabilidades').subscribe(data=>{

            this.datosHabilidad=data;
            this.setObser( this.datosHabilidad);

        })
            
         /*   .pipe(
                
                tap( data=>{
                        
                    this.obser.next(data);
                    
                }),
                        
                
            ) */
               
    }


    //:Observable<Habilidad>
    editar(datos:Habilidad){

        

        console.log(datos.id_habilidad)

       this.http.put<Habilidad>(this.url+'editarHabilidad',datos).subscribe(data=>{

            const indice= this.datosHabilidad.findIndex(i => datos.id_habilidad == i.id_habilidad)

            this.datosHabilidad[indice]=datos;

            this.setObser(this.datosHabilidad)
            
       })

          /*  .pipe(
                
                tap( data=>{
               
                    this.getDatos().subscribe()
           
                })     
            )*/
    
    }

    //:Observable<Habilidad>
    agregar(dato:Habilidad){

        this.http.post<Habilidad>(this.url+ 'nuevaHabilidad-Presentacion/'+'1', dato).subscribe(data=>{

           /* console.log(data)
            this.datosHabilidad.push(dato);

            this.setObser(this.datosHabilidad)*/

            this.getDatos();
        })
       
           /* .pipe(
                
                tap( data=>{
            
                  this.getDatos().subscribe()
        
                })
            )*/
    }


    //:Observable<any>
    borrar(dato:Habilidad){

        console.log(dato.id_habilidad)
       
        this.http.delete<any>(this.url+'borrarHabilidad/'+ dato.id_habilidad).subscribe(data=>{

          /* const indice= this.datosHabilidad.findIndex(i => dato.id_habilidad == i.id_habilidad)

          //this.datosHabilidad.splice(1,indice)

           const newDatos= this.datosHabilidad.filter(i => i.id_habilidad != dato.id_habilidad)

           console.log(newDatos)

            this.setObser(newDatos)*/
            this.getDatos();
        })

           /*     .pipe(
                    tap( data=>{
            
                        this.getDatos().subscribe()
        
                    })
                )*/
    }



}
