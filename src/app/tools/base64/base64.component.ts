import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styles: []
})
export class Base64Component implements OnInit {

  public encodedField: string = "";
  public decodedField: string = "";
  public isError: boolean = false;
  public errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

  public encode(): void {
    try{
      this.encodedField = btoa(this.decodedField); 
    } catch (e) {
      this.isError = true;
      console.log(e);
      this.errorMessage = e;
    }
  }

  public decode(): void {
    try{
      this.decodedField = atob(this.encodedField); 
    } catch (e) {
      this.isError = true;
      console.log(e);
      this.errorMessage = e;
    }   
  }

  public removeNotification (): void {
    this.isError = !this.isError;
  }

}
