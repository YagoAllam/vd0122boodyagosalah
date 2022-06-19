import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistraRoutingModule } from './registra-routing.module';
import { RegistraComponent } from './registra.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegistraComponent
  ],
  imports: [
    CommonModule,
    RegistraRoutingModule, 
    FormsModule, 
    HttpClientModule
  ]
})
export class RegistraModule { }
