import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfiloRoutingModule } from './profilo-routing.module';
import { ProfiloComponent } from './profilo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfiloComponent
  ],
  imports: [
    CommonModule,
    ProfiloRoutingModule,
    FormsModule
  ]
})
export class ProfiloModule { }
