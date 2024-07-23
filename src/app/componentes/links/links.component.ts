import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LinksComponent implements OnInit {

  @Input() menu:number;

  

  constructor() { }

  ngOnInit(): void {
   
    console.log(this.menu);
  }

}
