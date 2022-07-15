import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InterfaceOfferPlace } from 'src/app/shared/model/interface-offer-place';
import { AuthService } from 'src/app/shared/service/auth.service';
import { OfferPlaceService } from 'src/app/shared/service/offer-place.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  offers!: Observable<InterfaceOfferPlace[]>;

  constructor(private authServ: AuthService, private OfferService: OfferPlaceService,  private router: Router) { }

  ngOnInit(): void {}
  
  slogga(){
    this.authServ.logout()
    this.router.navigate(['/'])
  }

  viewOffers(){
   this.offers =  this.OfferService.getOfferPlaces();
  }


  goToMyPlaces(){
    this.router.navigate(['dashboard/my-offers/id'])
  }

}
