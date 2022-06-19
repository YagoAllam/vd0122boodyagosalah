import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthData } from './auth.service';
import { IUser } from './user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  ApiUrlUser:string = 'http://localhost:4201/users'
  ApiUrlGetUser:string = 'http://localhost:4201/'
  
  // register(user:Partial<IUser>){
  //   return this.http.post(this.ApiUrlUser, user)
  // }
  // getUser(id:number){
  //   return this.http.get(`${this.ApiUrlGetUser}${id}`)
  // }

  register(data:IUser) {
    return this.http.post<AuthData>(this.ApiUrlUser+"register", data).pipe(
      tap((data)=>{
        console.log("Signup", data);
        localStorage.setItem("user", JSON.stringify(data));
        this.loginSub.next(data);
      })
    )
  }

  private loginSub = new BehaviorSubject<null|AuthData>(null);
  
  loginObs = this.loginSub.asObservable();
}

