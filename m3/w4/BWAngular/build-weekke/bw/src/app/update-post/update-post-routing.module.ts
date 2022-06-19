import { identifierName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePostComponent } from './update-post.component';

const routes: Routes = [{ path: '', component: UpdatePostComponent },
{path:":id",  component: UpdatePostComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePostRoutingModule { }
