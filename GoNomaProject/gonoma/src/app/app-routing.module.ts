import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = 
[
{ path: 'login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule) }, 
 
{ path: 'dashboard',canActivate: [AuthGuard], loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'signup', loadChildren: () => import('./feature/signup/signup.module').then(m => m.SignupModule) },
{ path: 'offerPlace',canActivate: [AuthGuard], loadChildren: () => import('./feature/offer-place/offer-place.module').then(m => m.OfferPlaceModule) },
{ path: '', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
