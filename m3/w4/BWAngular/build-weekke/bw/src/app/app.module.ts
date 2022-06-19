import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FootComponent } from './comp/foot/foot.component';
import { NavComponent } from './comp/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
