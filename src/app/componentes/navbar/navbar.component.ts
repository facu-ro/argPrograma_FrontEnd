import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  EstadoLogin:boolean

  open:boolean=false

  constructor(private servicio_login:ServicioLoginService, private elementRef: ElementRef) { }

  ngOnInit(): void {

    this.servicio_login.getEstadoLogin.subscribe(data=>{

        this.EstadoLogin=data
     })
  }

    
  goToSection() {

    console.log("funcion funcionando")
    const sectionElement = this.elementRef.nativeElement.querySelector('#experiencia'); // Reemplaza '#section-id' con el ID de tu sección
    console.log(sectionElement);
    // if (sectionElement) {
    //   sectionElement.scrollIntoView({ behavior: 'smooth' }); // Agrega 'smooth' para una animación suave
    // }
  }


  openMenu(){


  //   if(this.open==false){

  //     this.open=true
  //   }
    
  //  else if(this.open==true){

  //   this.open=false
  //  }
    // (!this.open) ? this.open=true : this.open=false;
    this.open = !this.open;
    console.log(this.open)
    // if (!this.open) {
    //   const navbarCollapse = document.getElementById('navbarSupportedContent');
    //   if (navbarCollapse) {
    //     navbarCollapse.classList.remove('show');
    //    // navbarCollapse.setAttribute('aria-expanded', 'false');
    //    console.log("entro al if")
    //   }
    // }

  }


  logout(){

    this.servicio_login.setEstadoLogin(false);
  }

}
