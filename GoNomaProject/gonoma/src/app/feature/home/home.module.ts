import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home/home.component';
import { HomeChildComponent } from './component/home-child/home-child.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';











@NgModule({
  declarations: [
    HomeComponent,
    HomeChildComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule,
    NgbModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatIconModule,
    MatSliderModule,
    FormsModule
   
    
    
  ]
})
export class HomeModule { }
