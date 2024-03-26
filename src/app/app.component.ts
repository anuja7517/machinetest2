import { Component, Input, Output } from '@angular/core';
import { Istds } from './sharead/models/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'machinetest2';

 @Input() stdes ! : Istds []

  stdArray : Array<Istds> = [
    {
      fname : "Anuja",
      lname : "bhosle",
      email : "bhosleanuja@50gamil.com",
      contact : 126548521,
    }
  ]
  stdf(obj : Istds){
    this.stdArray.push(obj)
  }

}
