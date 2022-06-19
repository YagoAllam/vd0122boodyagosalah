import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePostComponent } from './home-post.component';

const routes: Routes = [{ path: '', component: HomePostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePostRoutingModule { }
