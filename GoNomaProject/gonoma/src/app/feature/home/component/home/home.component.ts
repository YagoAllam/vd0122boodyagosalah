import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceOfferPlace } from 'src/app/shared/model/interface-offer-place';
import { CityServiceService } from 'src/app/shared/service/city-service.service';
import { OfferPlaceService } from 'src/app/shared/service/offer-place.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  

  
   baseUrl = "https://api.teleport.org/api/";
   appUrl = "https://api.teleport.org/api/cities/?search=";

   city!:string 
 
   fullNameAllCitySearched:any[] = [];
   

   filterOffers:InterfaceOfferPlace[] = []
   



  constructor( private http: HttpClientModule, private router: Router, private cityServ:CityServiceService,private OfferService: OfferPlaceService) {  }

  ngOnInit(): void {
    this.viewOffersFilterd()
     
  }


  viewOffersFilterd(){

    
    this.OfferService.getOfferPlaces().subscribe(res => { 
      let filteredres = res
        console.log(filteredres);




        // if (this.fullNameAllCitySearched) {
        //   filteredres = res.filter(
           
        //     )
        //   this.screen = true
        // }

  



      console.log(this.filterOffers);
      
      if (filteredres.length === 0) {
       
       console.log("non ci sono annunci con questi condizioni")
       Swal.fire('No places in offerd')
      }else {
        this.filterOffers = filteredres;
       }
 
       
       
    });
  }











  goToCityPage(id:number, city:string) {
    console.log(id);
    console.log(city);

    this.cityServ.idSub.next(id);
    this.cityServ.nameSub.next(city);

    
  

    this.router.navigate(['/city-page',id]);

  }



  prova(){
    let finalUrl = this.appUrl + this.city;
    console.log(this.city)
    this.callCity(finalUrl);
    console.log(this.fullNameAllCitySearched)
  
  }





  removeTrailingSlash(str:string) {
      return str.replace(/\/+$/, "");
    }

callCity(finalUrl: string) {
  fetch(finalUrl).then((res) => res.json()).then((res) => 

   this.fullNameAllCitySearched = res._embedded["city:search-results"].map(
   
    (el:any) => {
      const href = el._links["city:item"].href;
      let id = href.split("geonameid:")[1];
      id = this.removeTrailingSlash(id);
      return { name: el.matching_full_name, id: id };
     
    }

  )
  )}


  loginBefor(){

    // mettere un if loggato  o no 


    Swal.fire('Login before')

  }



  imgLink = [
    {path: '../../../../../assets/imgCards/fotoCarusel/9.svg'},
    {path: '../../../../../assets/imgCards/fotoCarusel/10.svg'},
    {path: '../../../../../assets/imgCards/fotoCarusel/11.svg'},
    {path: '../../../../../assets/imgCards/fotoCarusel/12.svg'},
    {path: '../../../../../assets/imgCards/fotoCarusel/13.svg'},
    {path: '../../../../../assets/imgCards/fotoCarusel/14.svg'},
    
    {path: '../../../../../assets/imgCards/fotoCarusel/15.svg'},
    
    {path: '../../../../../assets/imgCards/fotoCarusel/17.svg'},
    {path: '../../../../../assets/imgCards/fotoCarusel/19.svg'},
    {path: '../../../../../assets/imgCards/fotoCarusel/20.svg'},
    {path: '../../../../../assets/imgCards/fotoCarusel/21.svg'},
    {path: '../../../../../assets/imgCards/fotoCarusel/22.svg'}
    
    
]


}


