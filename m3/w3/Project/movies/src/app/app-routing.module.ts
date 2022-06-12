import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
     path: 'register',
     loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'profilo', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./profilo/profilo.module').then(m => m.ProfiloModule) 
  },
  { path: 'welcomePage', loadChildren: () => import('./welcome-page/welcome-page.module').then(m => m.WelcomePageModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
