import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StdService } from '../../serivers/std.service';
import { UuidService } from '../../serivers/uuid.service';

@Component({
  selector: 'app-stdentform',
  templateUrl: './stdentform.component.html',
  styleUrls: ['./stdentform.component.scss']
})
export class StdentformComponent implements OnInit {
stdform! : FormGroup
  constructor(private _serives : StdService,
                private _uuidserives :UuidService ) { }

  ngOnInit(): void {
    this.stdform = new FormGroup({
      fname : new FormControl(null,[Validators.required]),
      lname : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      contact : new FormControl(null,[Validators.required]),

    })
  }
  onsumite(){
    if(this.stdform.valid){
      let obj= {...this.stdform.value,id : this._uuidserives.uuid2()}
      this._serives.addstd(obj),
      this.stdform.reset()
        
        
      
    }
  }

}
