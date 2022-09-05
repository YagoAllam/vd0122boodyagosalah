import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthData } from '../model/auth-data-model';
import { InterfaceNomad } from '../model/interface-nomad';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  ApiUrlUser:string = 'http://localhost:4201/'
  ApiUrlUsers:string = 'http://localhost:4201/users'
  jwtHelper = new JwtHelperService()
  autoLogoutTimer:any
  
  constructor(private http: HttpClient) {this.restore()}
  
 
  private loginSub = new BehaviorSubject<null|AuthData>(null);
  loginObss = this.loginSub.asObservable();


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

  
  login(data:{email:string; password:string}) {
    return this.http.post<AuthData>(this.ApiUrlUser+"login", data).pipe(
      tap((data)=>{
        localStorage.setItem("user", JSON.stringify(data))
        this.autoLogout(data.accessToken)
        this.loginSub.next(data)
      }),
    )
  }


  saveUser(t:string){
    localStorage.setItem("token", t)
  }

  isUserLoggedIn(){
    return localStorage.getItem("token") != null
  }


  logout() {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  
  this.loginSub.next(null)
  }

  autoLogout(accessToken:string) {
    const exDate = this.jwtHelper.getTokenExpirationDate(accessToken) as Date;
    const exMs = exDate.getTime() - new Date().getTime()

    this.autoLogoutTimer = setTimeout(()=>{
      this.logout();
    }, exMs)
  }



  // signup(user: InterfaceNomad){
  //   return this.http.post(this.ApiUrlUser, user)

  // }

  signup(data:InterfaceNomad) {
    return this.http.post<AuthData>(this.ApiUrlUser+"register", data).pipe(
      tap((data)=>{
        console.log("Signup", data);
        localStorage.setItem("user", JSON.stringify(data));
        this.loginSubs.next(data);
      })
    )
  }

  private loginSubs = new BehaviorSubject<null|AuthData>(null);
  
  loginObs = this.loginSubs.asObservable();

  getAllUsers(){
    return this.http.get<InterfaceNomad[]>(this.ApiUrlUsers)
  }



}
