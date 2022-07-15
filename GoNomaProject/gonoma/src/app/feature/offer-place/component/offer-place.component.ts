import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InterfaceOfferPlace } from 'src/app/shared/model/interface-offer-place';
import { OfferPlaceService } from 'src/app/shared/service/offer-place.service';

@Component({
  selector: 'app-offer-place',
  templateUrl: './offer-place.component.html',
  styleUrls: ['./offer-place.component.scss']
})
export class OfferPlaceComponent implements OnInit {
  
  formOfferPlace: FormGroup = this.forms.group({})
  newPlace:InterfaceOfferPlace[]=[]
  user!:any

  constructor(private  placeOfferService: OfferPlaceService, private forms:FormBuilder, private router:Router,private elementRef: ElementRef) { }


  ngOnInit(): void {
    this.buildGroup()
    this.user = JSON.parse(localStorage.getItem('user')!).user.id
    console.log(this.user);
    this.formOfferPlace.get("user")?.setValue(this.user)

    
  }




  buildGroup(){
    this.formOfferPlace = this.forms.group({
    title: this.forms.control(''),
    city: this.forms.control(''),
    price: this.forms.control(''),
    foto: this.forms.control(''),
    typeFlat: this.forms.control(''),
    startDate: this.forms.control(''),
    endDate: this.forms.control(''),
    characteristic:this.forms.control(''),
    contact:this.forms.control(''),
    screen:this.forms.control(''),
    gym:this.forms.control(''),
    cooking:this.forms.control(''),
    user: this.forms.control(this.user),
   

    
    })
  }



  addPlace( ){
      console.log(this.formOfferPlace.value);
     let annuncio =  this.placeOfferService.createNewOfferPlace(this.formOfferPlace.value).subscribe(res => {console.log(res);});
    
     this.router.navigate(['dashboard/my-offers/'+this.formOfferPlace.value.user]);
     console.log(this.formOfferPlace.value.user);
     
     
    }
    ngAfterViewInit(){
      // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = ' #ff914d';
   }

   
    // una chiamata get al buttone  e filtri gli annunci facendo ritornare solo quelli che hanno user === id del user 

}
