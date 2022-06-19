import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraComponent } from './registra.component';

const routes: Routes = [{ path: '', component: RegistraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistraRoutingModule { }
