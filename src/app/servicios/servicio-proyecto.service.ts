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

    //'http://localhost:8080/api/proyecto/' 'https://portfolio-back-rywe.onrender.com/api/proyecto/'
    private url:string='https://portfolio-back-rywe.onrender.com/api/proyecto/';


    
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
 
   //:Observable<Proyecto[]>
   getDatos() {
    
         this.http.get<Proyecto[]>(this.url + 'verProyectos/').subscribe(data=>{

            this.datosProyectos=data;
            this.setObser( this.datosProyectos);

        })
            
         /*   .pipe(
                
                tap( data=>{
                        
                    this.obser.next(data);
                    
                }),
                        
                
            ) */
               
    }


    //:Observable<Proyecto>
    editar(datos:Proyecto){

        

        console.log(datos.id_proyecto)

       this.http.put<Proyecto>(this.url+'editarProyecto/',datos).subscribe(data=>{

            const indice= this.datosProyectos.findIndex(i => datos.id_proyecto == i.id_proyecto)

            this.datosProyectos[indice]=datos;

            this.setObser(this.datosProyectos)
            
       })

          /*  .pipe(
                
                tap( data=>{
               
                    this.getDatos().subscribe()
           
                })     
            )*/
    
    }

    //:Observable<Proyecto>
    agregar(dato:Proyecto){

        this.http.post<Proyecto>(this.url+ 'nuevaProyecto-Presentacion/'+'1', dato).subscribe(data=>{

           /* console.log(data)
            this.datosProyectos.push(dato);

            this.setObser(this.datosProyectos)*/

            this.getDatos();
        })
       
           /* .pipe(
                
                tap( data=>{
            
                  this.getDatos().subscribe()
        
                })
            )*/
    }


    //:Observable<any>
    borrar(dato:Proyecto){

        console.log(dato.id_proyecto)
       
        this.http.delete<any>(this.url+'borrarProyecto/'+ dato.id_proyecto).subscribe(data=>{

          /* const indice= this.datosProyectos.findIndex(i => dato.id_proyecto == i.id_proyecto)

          //this.datosProyectos.splice(1,indice)

           const newDatos= this.datosProyectos.filter(i => i.id_proyecto != dato.id_proyecto)

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
