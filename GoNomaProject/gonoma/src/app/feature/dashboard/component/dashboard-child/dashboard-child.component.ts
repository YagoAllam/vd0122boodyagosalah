import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { InterfaceNomad } from 'src/app/shared/model/interface-nomad';


import { InterfaceOfferPlace } from 'src/app/shared/model/interface-offer-place';
import { AuthService } from 'src/app/shared/service/auth.service';
import { OfferPlaceService } from 'src/app/shared/service/offer-place.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.scss']
})
export class DashboardChildComponent implements OnInit {
  
  

  formSearchPlace: FormGroup = this.forms.group({})
  mostra:boolean[] = [];

  filterOffers:InterfaceOfferPlace[] = []
  options: string[] = [];
  allOffer:boolean = false;
  filteredResults:boolean = false;
  screen:boolean = false;
  gym:boolean = false;
  cooking:boolean = false;
  users:InterfaceNomad[]= []

  
  @Input() offers: InterfaceOfferPlace[] = [];
  @Output() triggerFilter: EventEmitter<void> = new EventEmitter()

  constructor(private OfferService: OfferPlaceService, private forms:FormBuilder, private userService: AuthService) { }

  

  ngOnInit(): void {
    this.buildGroup()
    this.CitysInInput()   
    this.ShowOffersInCarousel()

    this.userService.getAllUsers().subscribe(users => { 
      this.users = users;
    })

    

  }

  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;



  CitysInInput(){
    this.OfferService.getOfferPlaces().subscribe(res => { 
      let cities = res.map ( res => res.city )   
      this.options.push(...cities)

      console.log(this.options);
 
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );

     });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }



  

  viewOffers(){
    this.triggerFilter.emit();
    this.allOffer = true

    console.log(this.offers); 
    // vuoto ancora perchè è un asinc
    
    
 
    
  }
  
  ShowOffersInCarousel(){
    
    this.OfferService.getOfferPlaces().subscribe(res =>{ 
      let fotosTite = res.filter(offerta => offerta.characteristic)
      this.imgLink = fotosTite

      
      

    
    });

  }


  imgLink:InterfaceOfferPlace[] = [] 








  buildGroup() {
    this.formSearchPlace = this.forms.group({
      city: this.forms.control(''),
      typeFlat: this.forms.control(''),
      startDate: this.forms.control(''),
      endDate: this.forms.control(''),
      maxPrice: this.forms.control(''),

      screen:this.forms.control(''),
      gym:this.forms.control(''),
      cooking:this.forms.control('')
 
 
    })

  }



   dateRangeOverlaps(a_start:Date, a_end:Date, b_start:Date, b_end:Date) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end && b_end <= a_end) return true; // b ends in a
    if (b_start < a_start && a_end < b_end) return true; // a in b
    return false;
}
 


  viewOffersFilterd(){
    console.log(this.formSearchPlace.value.startDate);
    console.log(this.formSearchPlace.value.endDate);
    
    
    this.OfferService.getOfferPlaces().subscribe(res => { 
      let filteredres = res.filter( 
        offerta => offerta.city === this.formSearchPlace.value.city && 
        offerta.typeFlat === this.formSearchPlace.value.typeFlat &&
        offerta.price <= this.formSearchPlace.value.maxPrice
        )
        console.log(filteredres);

        if (this.formSearchPlace.value.startDate && this.formSearchPlace.value.endDate) {
        filteredres = filteredres.filter( offerta => {
          


          let startDateOfferd = new Date(offerta.startDate)
          let endDateOfferd = new Date(offerta.endDate)
          let startDateDemanded = new Date(this.formSearchPlace.value.startDate)
          let endDateDemanded = new Date(this.formSearchPlace.value.endDate)

          
          return this.dateRangeOverlaps(startDateDemanded, endDateDemanded,startDateOfferd,endDateOfferd)} );
          
        }



        if (this.formSearchPlace.value.screen === true) {
          filteredres = res.filter(
            offerta => offerta.screen === true
            )
          this.screen = true
        }

        if (this.formSearchPlace.value.gym === true) {
          filteredres = res.filter(
            offerta => offerta.gym === true
          )
          this.gym= true
        }

        if (this.formSearchPlace.value.cooking === true) {
          filteredres = res.filter(
            offerta => offerta.cooking === true
          )
          this.cooking= true
        }
        this.filteredResults = true;

    
 


      console.log(this.filterOffers);
      
      if (filteredres.length === 0) {
        this.filteredResults = false;
       console.log("non ci sono annunci con questi condizioni")
       Swal.fire('No places has this characteristics')
      }else {

        this.filterOffers = filteredres;
        for(let m of this.filterOffers) {
          this.mostra.push(false)
       }
      }
 
       
       
    });
  }

  viewContact(){
  

  }
  
  
  






// for filter the price
  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + '€';
    }

    return value;
  }











  }
  
  

