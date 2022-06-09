import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportPageComponent } from './sports/sport-page.component';
import { NavComponent } from './nav/nav.component';
import { ListaSportsComponent } from './sports/lista-sports/lista-sports.component';
import { SportComponent } from './sports/sport/sport.component';

@NgModule({
  declarations: [
    AppComponent,
    SportPageComponent,
    NavComponent,
    ListaSportsComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
