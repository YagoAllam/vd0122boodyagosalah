import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityServiceService } from 'src/app/shared/service/city-service.service';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent implements OnInit {

 
  cityName!:string;
  baseUrl = "https://api.teleport.org/api/";

  internetInfo:any[] = []
  costLeavingInfo:any[] = []
  citySizeInfo:any[] = []
  cityHousingInfo:any[] = []
  cityTravelInfo:any[] = []


  constructor(private cityServ:CityServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cityServ.nameObs.subscribe( (res:any) => {
      this.cityName = res
      console.log(this.cityName)
    })

    


  this.route.params.subscribe((params:any) => {
    console.log(params.id)
  this.getCityInfo(params.id)
  this. getCityCostLiving(params.id)
  this. getCitySize(params.id)
  this. getCityHousing(params.id)
  this.getCityTravel(params.id)

  })
 
 


}







    
  getCategoryInfo(cityInfos:any, argument:any) {
    return cityInfos.find((el:any) => el.id === argument);
   }
  
  



  getCityInfo(id:number) {
    const infoUrl = this.baseUrl + "cities/geonameid:" + id;
    ("");
    fetch(infoUrl)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        const slug = res._links["city:urban_area"].href.split("slug:")[1];
        const detailUrl = this.baseUrl + "urban_areas/slug:" + slug + "details";
        // https://api.teleport.org/api/urban_areas/slug:rome/details/
        fetch(detailUrl)
          .then((res) => res.json())
          .then((res) => {
            // console.log(res);
           let  cityDetails = res.categories;
            console.log(cityDetails);

            let InternetSpeed = this.getCategoryInfo(cityDetails, "NETWORK").data;
            // console.log(InternetSpeed);
            let InternetSpeedValues = InternetSpeed.map((el: { label: any; float_value: any; }) => {
              return { name: el.label, value: el.float_value };
            });
            // console.log(InternetSpeedValues);
            this.internetInfo.push(...InternetSpeedValues);
            console.log(this.internetInfo);
          });
      });
  }



  getCityCostLiving(id:number) {
    const infoUrl = this.baseUrl + "cities/geonameid:" + id;
    ("");
    fetch(infoUrl)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        const slug = res._links["city:urban_area"].href.split("slug:")[1];
        const detailUrl = this.baseUrl + "urban_areas/slug:" + slug + "details";
        // https://api.teleport.org/api/urban_areas/slug:rome/details/
        fetch(detailUrl)
          .then((res) => res.json())
          .then((res) => {
            // console.log(res);
           let  cityDetails = res.categories;
            console.log(cityDetails);

            let costLiving = this.getCategoryInfo(cityDetails, "COST-OF-LIVING").data;

            let costLivingValue = costLiving.map((el: { label: any; currency_dollar_value: any; }) => {
              return { name: el.label, value: el.currency_dollar_value };
            });

            this.costLeavingInfo.push(...costLivingValue);
            console.log(this.costLeavingInfo);
          });
      });
  }




  getCitySize(id:number) {
    const infoUrl = this.baseUrl + "cities/geonameid:" + id;
    ("");
    fetch(infoUrl)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        const slug = res._links["city:urban_area"].href.split("slug:")[1];
        const detailUrl = this.baseUrl + "urban_areas/slug:" + slug + "details";
        // https://api.teleport.org/api/urban_areas/slug:rome/details/
        fetch(detailUrl)
          .then((res) => res.json())
          .then((res) => {
            // console.log(res);
           let  cityDetails = res.categories;
            console.log(cityDetails);

            let citySize = this.getCategoryInfo(cityDetails, "CITY-SIZE").data;

            let citySizeValue = citySize.map((el: { label: any; float_value: any; }) => {
              return { name: el.label, value: el.float_value };
            });
    
            this.citySizeInfo.push(...citySizeValue);
            console.log(this.citySizeInfo);
          });
      });
  }


  getCityHousing(id:number) {
    const infoUrl = this.baseUrl + "cities/geonameid:" + id;
    ("");
    fetch(infoUrl)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        const slug = res._links["city:urban_area"].href.split("slug:")[1];
        const detailUrl = this.baseUrl + "urban_areas/slug:" + slug + "details";
        // https://api.teleport.org/api/urban_areas/slug:rome/details/
        fetch(detailUrl)
          .then((res) => res.json())
          .then((res) => {
            // console.log(res);
           let  cityDetails = res.categories;
            console.log(cityDetails);

            let cityinfo = this.getCategoryInfo(cityDetails, "HOUSING").data;

            let cityInfoValue = cityinfo.map((el: { label: any; currency_dollar_value: any; }) => {
              return { name: el.label, value: el.currency_dollar_value };
            });
    
            this.cityHousingInfo.push(...cityInfoValue);
            console.log(this.cityHousingInfo);
          });
      });
  }

  getCityTravel(id:number) {
    const infoUrl = this.baseUrl + "cities/geonameid:" + id;
    ("");
    fetch(infoUrl)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        const slug = res._links["city:urban_area"].href.split("slug:")[1];
        const detailUrl = this.baseUrl + "urban_areas/slug:" + slug + "details";
        // https://api.teleport.org/api/urban_areas/slug:rome/details/
        fetch(detailUrl)
          .then((res) => res.json())
          .then((res) => {
            // console.log(res);
           let  cityDetails = res.categories;
            console.log(cityDetails);

            let cityinfo = this.getCategoryInfo(cityDetails, "TRAVEL-CONNECTIVITY").data;

            let cityInfoValue = cityinfo.map((el: { label: any; currency_dollar_value: any; }) => {
              return { name: el.label, value: el.currency_dollar_value };
            });
    
            this.cityTravelInfo.push(...cityInfoValue);
            console.log(this.cityTravelInfo);
          });
      });
  }






  

}
