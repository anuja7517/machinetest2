import { Injectable } from '@angular/core';
import { Istd } from '../models/stdservice';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  constructor() { }

  stdArray : Array<Istd> = [
    {
      fname : "madu",
      lname : "patil",
      email :" patilmadu50@gamil.com",
      contact : 142365754,
      id : "123"
    },
    {
    fname : "sonu",
    lname : "patil",
    email :" patilmadu50@gamil.com",
    contact : 15697452552,
    id  :"521"
  }
  ]

  fetchAllstd(){
   return this.stdArray
  }
  addstd(obj : Istd){
    this.stdArray.push(obj)
  }
  remove(id : string){
    let getIndex = this.stdArray.findIndex(std =>std.id===id)
    this.stdArray.splice(getIndex,1)
  }
}




