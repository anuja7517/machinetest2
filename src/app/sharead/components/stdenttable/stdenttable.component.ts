import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/stdservice';
import { StdService } from '../../serivers/std.service';

@Component({
  selector: 'app-stdenttable',
  templateUrl: './stdenttable.component.html',
  styleUrls: ['./stdenttable.component.scss']
})
export class StdenttableComponent implements OnInit {
  stdArray ! : Istd [];
  constructor( private _stdservices : StdService) { }
 
  ngOnInit(): void {
    this.stdArray = this._stdservices.fetchAllstd()
  }
  ondelate(id :string){
    this._stdservices.remove(id)
  }
}
