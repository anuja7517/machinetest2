import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdformComponent } from './sharead/components/stdform/stdform.component';
import { StdtableComponent } from './sharead/components/stdtable/stdtable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StdentformComponent } from './sharead/components/stdentform/stdentform.component';
import { StdenttableComponent } from './sharead/components/stdenttable/stdenttable.component';


@NgModule({
  declarations: [
    AppComponent,
    StdformComponent,
    StdtableComponent,
    StdentformComponent,
    StdenttableComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
