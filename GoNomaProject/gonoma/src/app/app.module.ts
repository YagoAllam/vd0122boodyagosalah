import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './shared/component/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FilreSearrchComponent } from './filre-search/filre-searrch.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import {MatNativeDateModule} from '@angular/material/core';

import {MatFormFieldModule} from '@angular/material/form-field';


import {MatCheckboxModule} from '@angular/material/checkbox';








@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    FilreSearrchComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
 
   MatButtonModule,
   MatSelectModule,
   MatInputModule,
   MatAutocompleteModule,
   MatIconModule,
   MatDatepickerModule,
   MatFormFieldModule,
   MatNativeDateModule,
   MatCheckboxModule,
   NgbModule,
   FormsModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
