import { Component, OnInit } from '@angular/core';


declare function particula(a?:any,b?:any)

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    particula()
  }

}
