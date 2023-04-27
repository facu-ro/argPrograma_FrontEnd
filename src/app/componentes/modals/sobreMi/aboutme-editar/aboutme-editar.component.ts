import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioPresentacionService } from 'src/app/servicios/servicio-presentacion';

@Component({
  selector: 'app-aboutme-editar',
  templateUrl: './aboutme-editar.component.html',
  styleUrls: ['./aboutme-editar.component.css']
})
export class AboutmeEditarComponent implements OnInit {

  form:FormGroup;

  bandera_boton:boolean=false;
  
  

  constructor(private formBuilder:FormBuilder, private servicio_presentacion:ServicioPresentacionService ) {

    this.form=this.formBuilder.group({

      fk_persona:['', [Validators.required]],
      descripcion:['',[Validators.required]],
      banner:[''],
      nombre:['',Validators.required],
      apellido:[''],
      foto:['']

     });

     this.form.controls['fk_persona'].disable();
   }

  ngOnInit(): void {
  }

  limpiar():void{

    console.log("limpiar")
  }

  
  agregar(event:Event){

    event.preventDefault;

    
   if( this.form.controls['descripcion'].valid ){
   
      this.servicio_presentacion.agregar(this.form.value).subscribe(d=>{})

   }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
    

  }



  editar(event:Event){
    
    event.preventDefault;

    if (this.form.valid){


      this.servicio_presentacion.editar( this.form.getRawValue() ).subscribe()
    }
    else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
