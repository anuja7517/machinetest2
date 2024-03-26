import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, } from '@angular/core';
import { Istds } from '../../models/std';


@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {

  constructor() { }
  @ViewChild('fname') fnameRef ! : ElementRef;
  @ViewChild('lname') lnameRef ! : ElementRef;
  @ViewChild('email') emailRef ! : ElementRef;
  @ViewChild('contact') contactRef ! : ElementRef;
  @Output() stdform : EventEmitter<Istds> = new EventEmitter<Istds>()

  ngOnInit(): void {
this.onsumite()
  }
  onsumite(){
    let obj : Istds = {
      fname : this.fnameRef.nativeElement.value,
      lname : this.lnameRef.nativeElement.value,
      email : this.emailRef.nativeElement.value,
      contact : this.contactRef.nativeElement.value,
    }
    console.log(obj);
    if(!Object.values(obj).includes("")){
      this.stdform.emit(obj)
      console.log(obj);
      

    }
    
  }

}
