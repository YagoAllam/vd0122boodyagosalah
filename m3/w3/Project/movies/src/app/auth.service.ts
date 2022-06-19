import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iuser } from './login/interface';
import { tap } from 'rxjs/operators';

export interface authData {

  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;

  }

 
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'http://localhost:4201/login'
  
  private logInSubject = new BehaviorSubject<authData | null> (null) 
  logInObs = this.logInSubject.asObservable()

  login(authUser:Iuser){
    return this.http.post<authData | null>(this.apiUrl, authUser)
    .pipe(tap( (data) => {
      console.log(data)
      this.logInSubject.next(data)

    })

    )
  }

  saveUser(token:string){
    localStorage.setItem('token', token)
  }

  ////////////////

  //restituisce true quando fa il remove del user dal localStorage usando il suo token

  loguotUser():boolean{
    localStorage.removeItem('token')
    return true;
  }


// restituisce true o false per controllare se il user ha un token o meno nel localStorage
  isUserLoggedIn():boolean{
    return localStorage.getItem('token') != null
  }







}
