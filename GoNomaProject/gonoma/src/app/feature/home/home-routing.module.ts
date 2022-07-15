import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { HomeChildComponent } from './component/home-child/home-child.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = 
[{ path: '', 
component: HomeComponent
 },
 {path: 'city-page/:id', 
 component: HomeChildComponent,
 canActivate: [AuthGuard]

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
