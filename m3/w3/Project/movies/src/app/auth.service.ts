import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './login/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'http://localhost:4201/login'

  login(authUser:Iuser){
    return this.http.post(this.apiUrl, authUser)
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
