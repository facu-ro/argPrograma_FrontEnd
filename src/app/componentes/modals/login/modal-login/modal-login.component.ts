import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioExperienciaService } from 'src/app/servicios/servicio-experiencia.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {


  form:FormGroup;

  EstadoLogin:boolean

  constructor(private formBuilder:FormBuilder, private servicio_login:ServicioLoginService ) {

    this.form=this.formBuilder.group({

      username:['', [Validators.required]],
      password:['',[Validators.required]]
    

     });


     this.servicio_login.getEstadoLogin.subscribe(data=>{

      console.log(data)
        this.EstadoLogin=data
     })

   }

  ngOnInit(): void {
  }

  //hola

  loguin():void{

   //(this.form.valid)? console.log(this.form.valid) : console.log("chau")

   this.servicio_login.login(this.form.value).subscribe(

    data=>{

      this.servicio_login.setEstadoLogin(data);
      
      if(data){
        this.form.reset
        
      }
    }

   )
   /*
     if(this.form.valid){
      console.log(this.form.value)
    }
    else{
      console.log("los valores no pasaron")  
    
    }
  
   */
  
    }




    
}
