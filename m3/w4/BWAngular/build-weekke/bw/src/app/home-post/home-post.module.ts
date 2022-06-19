import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePostRoutingModule } from './home-post-routing.module';
import { HomePostComponent } from './home-post.component';


@NgModule({
  declarations: [
    HomePostComponent
  ],
  imports: [
    CommonModule,
    HomePostRoutingModule
  ]
})
export class HomePostModule { }
