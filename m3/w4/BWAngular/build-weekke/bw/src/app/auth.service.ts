import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, tap } from 'rxjs';
import { IUser } from './user';

export interface AuthData {
  accessToken: string;
  user: {
    email: string;
    id: string;
    nome: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ApiUrlUser:string = 'http://localhost:4201/login'
  jwtHelper = new JwtHelperService()
  autoLogoutTimer:any

  constructor(private http: HttpClient) { this.restore()}

  restore(){
    let userJson = localStorage.getItem("user");
    if(!userJson)return

    const user:AuthData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      this.logout()
      return
  }
  this.loginSub.next(user)
    this.autoLogout(user.accessToken)
}
  
  

  saveUser(t:string){
    localStorage.setItem("token", t)
  }
  isUserLoggedIn(){
    return localStorage.getItem("token") != null
  }
  // logout():boolean{
  //   localStorage.removeItem("token")
  //   return true
  // }

  logout() {
    localStorage.removeItem("user")
    this.loginSub.next(null)
  }
  private loginSub = new BehaviorSubject<null|AuthData>(null);
  
  loginObs = this.loginSub.asObservable();
  
  // login(user:Partial<IUser>){
  //   return this.http.post(this.ApiUrlUser, user)
  // }

  login(data:{email:string; password:string}) {
    return this.http.post<AuthData>(this.ApiUrlUser+"login", data).pipe(
      tap((data)=>{
        localStorage.setItem("user", JSON.stringify(data))
        this.autoLogout(data.accessToken)
        this.loginSub.next(data)
      }),
    )
  }

  autoLogout(at:string) {
    const exDate = this.jwtHelper.getTokenExpirationDate(at) as Date;
    const exMs = exDate.getTime() - new Date().getTime()

    this.autoLogoutTimer = setTimeout(()=>{
      this.logout();
    }, exMs)
  }



  // verificaLogin(user:Partial<IUser>){
  //   return this.http.post(this.ApiUrlUser, user).pipe(tap(res=>{this.loginSub.next(res)}))
  // }
}
