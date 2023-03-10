import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { ServicioExperienciaService } from 'src/app/servicios/servicio-experiencia.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


import {map} from "rxjs/operators" 
import { Estudio } from 'src/app/modelos/estudio';
import { Experiencia } from 'src/app/modelos/experiencia';

declare var $:any

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  

  @Input() contador:number
  
 //@ViewChild("formu") formu: ElementRef;

   //const form:HTMLElement=document.getElementById("formulario") ;

    //const f=this.formu.nativeElement
    //form.style.backgroundColor="green";

  form:FormGroup;

  bandera_boton:boolean=false;

  
  @Output() closeModal = new EventEmitter();

 @ViewChild("experiencia-editar") modal:ElementRef;
  

  experiencia:Experiencia[];
  
  
  constructor(private ruta:ActivatedRoute,private servicio_experiencia:ServicioExperienciaService, private formBuilder:FormBuilder){ 

    this.form=this.formBuilder.group({

      id_experiencia:['', [Validators.required]],
      descripcion:['',[Validators.required]],
      imagen:[''],
      puesto:[''],
      inicio:[''],
      fin:[''],
      url:[''],
      empresa:[''],

     });

     this.form.controls['id_experiencia'].disable();
  } 


  ngOnInit(): void {}

  



  onCloseModal():void {
    this.closeModal.emit();
  }


   // experiencia.foreach( i=> console.log(i.descripcion)) this.experiencia=this.form.value;

 


 
  limpiar():void{

    console.log("limpiar")
  }
  


  agregar(event:Event){

    event.preventDefault;

    console.log(this.form.value)

   const  expeAgregar:Experiencia=this.form.value
   
    
   if( this.form.controls['descripcion'].valid ){

      console.log(expeAgregar)

   
      this.servicio_experiencia.agregar(this.form.value).subscribe(d=>{})

   }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
    

  }



  editar(event:Event){
    
    event.preventDefault;

    if (this.form.valid){

    // this.actualizar();
    //console.log(this.form.value)

      this.servicio_experiencia.editar(this.form.value).subscribe( data=>{

       //this.servicio_experiencia.getDatos().subscribe()
        console.log(data)


      } )
    // console.log(this.experiencia)
    }
    else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }


  


}
