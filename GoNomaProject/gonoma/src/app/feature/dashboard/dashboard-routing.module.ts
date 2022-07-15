import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MyOffersComponent } from './component/my-offers/my-offers.component';



const routes: Routes = [
  { path: '',
   component: DashboardComponent 
  },
  {path: 'my-offers/:id', 
  component: MyOffersComponent
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
