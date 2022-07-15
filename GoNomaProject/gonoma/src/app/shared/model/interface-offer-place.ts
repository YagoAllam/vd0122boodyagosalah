import { InterfaceNomad } from "./interface-nomad";

export interface InterfaceOfferPlace {
    
    id: number | null;

    title: string;
    city:string;
    price: string;
    foto:  any;
    
    startDate: Date;
    endDate: Date;
    
    contact: string;
    typeFlat: string;
    
    
    characteristic:string;

    screen: boolean;
    gym: boolean;
    cooking: boolean;
    user: string ;
    userData: InterfaceNomad | undefined;
    
    
    }
    