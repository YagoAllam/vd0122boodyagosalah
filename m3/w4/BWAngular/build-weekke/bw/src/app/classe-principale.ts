import { Iposts } from "./interface";

let ciao =  `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`

export class ClassePrincipale implements Iposts{
    
    id:number;
    title:string;
    body:string;
    date:any;
    
    constructor( id:number, title:string,body:string){
        
        this.id=id
        this.title=title
        this.body=body
        this.date= ciao
    }

}
