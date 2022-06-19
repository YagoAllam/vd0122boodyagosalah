import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'new-post', canActivate: [AuthGuard], loadChildren: () => import('./new-post/new-post.module').then(m => m.NewPostModule) }, 
  { path: 'update-post', loadChildren: () => import('./update-post/update-post.module').then(m => m.UpdatePostModule) }, 
  { path: 'home-post', canActivate: [AuthGuard], loadChildren: () => import('./home-post/home-post.module').then(m => m.HomePostModule) }, 
  { path: 'registra', loadChildren: () => import('./registra/registra.module').then(m => m.RegistraModule) }, 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
