import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ServicioProyectoService } from 'src/app/servicios/servicio-proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.scss']
})
export class EditarProyectoComponent implements OnInit {


  form:FormGroup;

  bandera_boton:boolean=false;


  constructor(private formBuilder:FormBuilder, private servicio_proyecto:ServicioProyectoService) {

    this.form=this.formBuilder.group({

      id_proyecto:['', [Validators.required]],
      descripcion:['',[Validators.required]],
      url:[''],
      titulo:['',Validators.required],
      imagen:['']

     });

     this.form.controls['id_proyecto'].disable();
  } 
   

  ngOnInit() {
  }






 
  limpiar():void{

    console.log("limpiar")
  }
  


  agregar(event:Event){

    event.preventDefault;

    
   if( this.form.controls['descripcion'].valid ){
   
      this.servicio_proyecto.agregar(this.form.value) //.subscribe(d=>{})

   }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
    

  }



  editar(event:Event){
    
    event.preventDefault;

   
   // const id_proyecto:number= this.form.get("id_proyecto").value 

    //console.log(this.form.get("id_proyecto").value )

    if (this.form.valid){

    // this.actualizar();
    // console.log(this.form.value)

      this.servicio_proyecto.editar( this.form.getRawValue() )
    }
    else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }



}
