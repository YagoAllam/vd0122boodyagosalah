import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardChildComponent } from './component/dashboard-child/dashboard-child.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MyOffersComponent } from './component/my-offers/my-offers.component';












@NgModule({
  declarations: [
    DashboardComponent,
    DashboardChildComponent,
    MyOffersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatSliderModule,
    MatCheckboxModule,
    NgbModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    MatBadgeModule,
    MatPaginatorModule
    
   
  ]
})
export class DashboardModule { }
