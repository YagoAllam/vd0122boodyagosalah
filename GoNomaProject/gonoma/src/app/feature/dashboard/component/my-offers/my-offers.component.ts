import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceOfferPlace } from 'src/app/shared/model/interface-offer-place';
import { OfferPlaceService } from 'src/app/shared/service/offer-place.service';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.scss']
})
export class MyOffersComponent implements OnInit {

  myOffersArray:InterfaceOfferPlace[] = []

  constructor(private offerService:OfferPlaceService, private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      console.log(params.id)
      this.viewOffersFilterd(params.id)

    })

    
   
  }



  
  viewOffersFilterd(id:string){
  
    
    
    this.offerService.getOfferPlaces().subscribe(res => { 
      let myOffers = res.filter( 
        offerte => offerte.user == id 
        )
        console.log(myOffers);


        this.myOffersArray = myOffers
       
       
    });
  }
  
  
  








}
