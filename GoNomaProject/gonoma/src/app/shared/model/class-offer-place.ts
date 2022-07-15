import { InterfaceOfferPlace } from "./interface-offer-place";

export class Offerplace implements InterfaceOfferPlace{
   
    city:string;
    price: string;
    foto:  any;
    startDate: Date
    endDate: Date
    characteristic:string;
    
    
    
    constructor( city: string, price: string, foto:any, startDate: Date,
        endDate: Date, characteristic: string ) {
        
        
        this.city = city;
        this.price = price;
        this.foto =  foto;
        this.startDate = startDate;
        this.endDate = endDate;
        this.characteristic = characteristic;
      
    }
    }
    