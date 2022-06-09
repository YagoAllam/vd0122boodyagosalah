import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './Class/photo';
import { IPhoto } from './Interface/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  

  constructor(private http:HttpClient) 
  {}

  apiUrl = 'https://jsonplaceholder.typicode.com/photos'


  getPhotos(){
    return this.http.get<IPhoto[]>(this.apiUrl, {headers: {'Accept': 'application/json'}})
    .pipe(

      
      
    )
  }

  deletePhoto(id:number){
    return this.http.delete(this.apiUrl + '/'+id)
  }




}
