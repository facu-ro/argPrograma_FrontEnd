
import { Injectable } from '@angular/core';

import { Observable, Subject, BehaviorSubject } from 'rxjs';

// import 'rxjs'/'Rx'
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import {map,tap} from "rxjs/operators"


import { Presentacion } from '../modelos/presentacion';
import { ServicioLoginService } from './servicio-login.service';
import { environment } from 'src/environments/environment';



@Injectable()
export class ServicioPresentacionService  {

  datosPresentacions:Presentacion;


  private obser= new Subject<Presentacion>();

  private login$=new BehaviorSubject<boolean>(false);

  //'http://localhost:8080/api/presentacion/' 
  //'https://portfolio-back-rywe.onrender.com/api/presentacion/'
  //../assets/json/datos.json
  
  private url:string='../assets/json/datos.json'; 


  constructor(private http:HttpClient, private servicio_login:ServicioLoginService){ 

    this.getDatos().subscribe()
  }


  get getEstadoLogin():Observable<boolean>{

    return this.servicio_login.getEstadoLogin

  }


  get getObser():Observable<any>{//Presentacion

    return this.obser.asObservable();
    }


  setObser(datos:Presentacion){

    // this.datosPresentacions.push(datos)
    
    this.obser.next(datos)

  }
  
    
    
  getDatos():Observable<any> {//Presentacion
    
          return this.http.get<any>(this.url)// + 'verUnaPresentacion/'+'3'

        .pipe(

          tap(data => {

            this.obser.next(data["sobre_mi"]);

          })


        ); 
                
    }


  editar(datos:Presentacion):Observable<Presentacion>{

    return this.http.put<Presentacion>(this.url+'editarPresentacion/',datos)
          .pipe(
              
              tap( data=>{
              
                  this.getDatos().subscribe()
          
              })     
          )
  
  }

  //:Observable<Presentacion>
  agregar(dato:Presentacion):Observable<Presentacion>{

    return   this.http.post<Presentacion>(this.url+ 'nuevaPresentacion-Presentacion/'+'1', dato)

          .pipe(
              
              tap( data=>{
          
                this.getDatos().subscribe()
      
              })
          )
  }


  //
  borrar(dato:Presentacion):Observable<any>{

      console.log(dato.fk_persona)
      
    return  this.http.delete<any>(this.url+'borrarPresentacion/'+ dato.fk_persona)
    
    //.subscribe(data=>{

        /* const indice= this.datosPresentacions.findIndex(i => dato.fk_persona == i.fk_persona)

        //this.datosPresentacions.splice(1,indice)

          const newDatos= this.datosPresentacions.filter(i => i.fk_persona != dato.fk_persona)

          console.log(newDatos)

          this.setObser(newDatos)*/
        //   this.getDatos();
    //  })

              .pipe(
                  tap( data=>{
          
                      this.getDatos().subscribe()
      
                  })
              )
  }
  
  



}
