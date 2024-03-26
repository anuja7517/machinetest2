import { Component, Input, OnInit } from '@angular/core';
import { Istds } from '../../models/std';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
  stdmsg !: Istds 
  stdf(data: Istds) {
    this.stdmsg = data
  }
  @Input() stdes! : Istds []
  constructor() { }

  ngOnInit(): void {
  }

}
