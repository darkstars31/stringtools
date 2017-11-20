import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: []
})
export class SideNavComponent implements OnInit {

  public tools: string[] = [
    'Base64',
    'Raw List',
    'Json Escaper',
    'Json Validator',
    'Jwt Inspector',
    'XML Validator',
    'UTC TimeStamper',
    'Random Generator',
    'RSA Key Gen'
  ];

  constructor() { }

  ngOnInit() {
  }

  
  

}
