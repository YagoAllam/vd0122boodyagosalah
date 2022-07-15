import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, 
    HttpClientModule,
    

  ]
})
export class LoginModule { }
