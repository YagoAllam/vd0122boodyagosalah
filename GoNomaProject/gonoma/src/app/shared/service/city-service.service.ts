import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  constructor() { }

  idSub = new BehaviorSubject<number | null>(null);
  idObs = this.idSub.asObservable(); 

  nameSub = new BehaviorSubject<string | null>(null);
  nameObs = this.nameSub.asObservable(); 





}
