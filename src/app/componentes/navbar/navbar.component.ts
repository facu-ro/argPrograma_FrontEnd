import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  EstadoLogin:boolean


  constructor(private servicio_login:ServicioLoginService) { }

  ngOnInit(): void {

    this.servicio_login.getEstadoLogin.subscribe(data=>{

        this.EstadoLogin=data
     })
  }


  logout(){

    this.servicio_login.setEstadoLogin(false);
  }

}
