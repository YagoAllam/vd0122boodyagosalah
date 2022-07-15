import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferPlaceRoutingModule } from './offer-place-routing.module';
import { OfferPlaceComponent } from './component/offer-place.component';
import {MatSelectModule} from '@angular/material/select';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';







@NgModule({
  declarations: [
    OfferPlaceComponent,
    
  ],
  imports: [
    CommonModule,
    OfferPlaceRoutingModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
 
    MatDatepickerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule
   
    

  ]
})
export class OfferPlaceModule { }

