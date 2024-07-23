
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmbeddedTemplateAst } from '@angular/compiler';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private http:HttpClient){ 

    this.form=this.formBuilder.group({

      destinatario:['',[Validators.required, Validators.email]],
      asunto:['',[Validators.required]],
      mensaje:['',[Validators.required]]

    })
  
  
  }

  ngOnInit(): void {
  }


  private mensajeAlerta(display:string, clase:string, mensaje:string):void{

    let alerta=document.getElementById("alerta");

    let divAlert=document.createElement("div");
    let span=document.createElement("span");
    let button=document.createElement("button");

    divAlert.classList.add("alert")
    divAlert.classList.add("alert-dismissible")
    divAlert.classList.add("fade")
    divAlert.classList.add("show")
    divAlert.classList.add(clase)
    divAlert.setAttribute("role","alert")

    span.textContent=mensaje

    button.classList.add("btn-close")
    button.setAttribute("type","button")
    button.setAttribute("data-bs-dismiss","alert")
    button.setAttribute("aria-label","Close")
    

    divAlert.appendChild(span)
    divAlert.appendChild(button)
    alerta.appendChild(divAlert)

    // alerta.style.display=display;
    // alerta.classList.add(clase)
    // document.querySelector("#alerta > span").textContent=mensaje;
  }
  

  enviar(event:Event):void{

    event.preventDefault();
    console.log("los datos del formulario son :", this.form.value)
    if(this.form.valid){
      this.http.post<any>("http://localhost:8080/enviar-correo", this.form.value).subscribe(data=>{

        //alert(data);
        this.mensajeAlerta("block","alert-success","mensaje enviado")
      },
      error => {
        //alert("Hubo un error al enviar el correo.");
        this.mensajeAlerta("block","alert-danger","no se pudo enviar. ")
        console.error('Error:', error);
      })
    }
    else{

      //alert("fallo la carga, ")
      this.mensajeAlerta("block","alert-danger","error al enviar")
      this.form.markAllAsTouched();

    }

  }



}
