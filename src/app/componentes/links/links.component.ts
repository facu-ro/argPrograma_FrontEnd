import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LinksComponent implements OnInit {

  @Input() menu:number;

  private url:string='../assets/json/datos.json';

  datos:any[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
    console.log(this.menu);

    this.http.get<any>(this.url).subscribe(datos =>{

      this.datos=datos.links
    })
  
  }

}
