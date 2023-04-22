import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/modelos/habilidad';
import { ServicioHabilidadService } from 'src/app/servicios/servicio-habilidad.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})


export class EditarHabilidadComponent implements OnInit {

  
  form:FormGroup;

  bandera_boton:boolean=false;

  constructor(private servicio_habilidad:ServicioHabilidadService,private formBuilder:FormBuilder) {

    this.form=this.formBuilder.group({

      id_habilidad:['', [Validators.required]],
      descripcion:['',[Validators.required]],
      porcentaje:['',[Validators.required]],
      imagen:['']

     });

     this.form.controls['id_habilidad'].disable();
  } 
 

  ngOnInit() {
  }


  limpiar():void{

    console.log("limpiar")
  }

  agregar(event:Event){

    event.preventDefault;

    console.log(this.form.getRawValue())

  
   if( this.form.controls['descripcion'].valid ){

      
      this.servicio_habilidad.agregar(this.form.getRawValue())

   }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
    

  }



  editar(event:Event){
    
    event.preventDefault;

    const  habAgregar:Habilidad=this.form.getRawValue()

    console.log(habAgregar)

    if (this.form.valid){

    // this.actualizar();
    //console.log(this.form.value)

      this.servicio_habilidad.editar(this.form.getRawValue() )

       //this.servicio_habilidad.getDatos().subscribe()
        //console.log(data)


      
    // console.log(this.habilidad)
    }
    else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }





}

 




/*function ngOnInit() {
  throw new Error('Function not implemented.');
} */
