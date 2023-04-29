import { Injectable } from '@angular/core';

import { Observable, Subject, BehaviorSubject } from 'rxjs';

// import 'rxjs'/'Rx'
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import {map,tap} from "rxjs/operators"


import { Persona } from '../modelos/persona';



@Injectable()
export class ServicioLoginService {

    private user:Persona;

    private login$=new BehaviorSubject<boolean>(false);



    constructor(private http:HttpClient){ }


    get getEstadoLogin(){

        return this.login$.asObservable();
    }



  setEstadoLogin(estado:boolean){

        this.login$.next(estado);
    }


    // ( sessionStorage.getItem("user_name")==null) ? this.EstadoLogin=true : this.EstadoLogin=false


    login(dato:any):Observable<any>{

        console.log(dato)
        
        this.user=new Persona(dato.username,dato.password)
      //  this.user.setEmail(dato.username);
       // this.user.setPassword(dato.password)      
  //http://localhost:8080
       
        return this.http.post<any>("https://portfolio-back-rywe.onrender.com/api/login",this.user)
       /*   .pipe(
            tap(
                res=>{
                  console.log(res)
                }
            )
          )*/
  
      }


}
