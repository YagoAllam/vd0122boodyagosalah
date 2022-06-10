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







}
