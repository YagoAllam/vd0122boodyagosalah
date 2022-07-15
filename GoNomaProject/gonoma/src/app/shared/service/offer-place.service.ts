import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceOfferPlace } from '../model/interface-offer-place';


@Injectable({
  providedIn: 'root'
})
export class OfferPlaceService {

  constructor(private http : HttpClient ) { }

  ApiUrlPlaces:string = 'http://localhost:4201/offerplaces'


  getOfferPlaces(){
    return this.http.get<InterfaceOfferPlace[]>(this.ApiUrlPlaces)
  }


  getplace(id:number){
    return this.http.get<InterfaceOfferPlace>(`${this.ApiUrlPlaces}/${id}`)
  }


  createNewOfferPlace(place:InterfaceOfferPlace){

    console.log(place); 
    return this.http.post(this.ApiUrlPlaces, place)

  }


  updatePlace(){

  }


  removePlace(){}



}
