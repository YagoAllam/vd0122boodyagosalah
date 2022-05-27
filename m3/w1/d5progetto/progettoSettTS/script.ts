// sarebbe stato più oppurtono usare una abstract per definire le funzioni di ricarica, getnumerochiamata ecc solo una volta visto che non cambiano da User a altro. Però la traccia voleva Interface quidni commento questa soluzione e continuo sotto con Interfac (cerco di modificare leggermente la funzionalità delle funzioni nel secondo e terzo User creando promozioni e piani tarrifari diversi :)

// ho usato l'inglese per abituarmi

// per verificare il funzionamento: aprire il browser e vedere i messaggi del console (ricaricare il saldo ed effettuare chiamate)


interface smartPhoneInterface{
    charge: number;
    numberCallsDone:number;

    recharge(x:number):void;
    oneCallDone(min:number):void;
    mychargeNow404():number;
    getNumberCalls():number;
    setNumberCallsZero():void;

}

///////////////////////////////////////////////////////////////////////////////////


class FirstUser implements smartPhoneInterface{
    
    public charge:number;
    public numberCallsDone:number;

    constructor(recharge:number, numberCallsDone:number){
        this.charge = recharge;
        this.numberCallsDone = numberCallsDone;
    }

    public recharge(x:number):void{
        this.charge = this.charge + x;
        
    }

    public oneCallDone(min:number):void{

         this.charge - (0.20 * min);
         this.numberCallsDone += 1;

    }

    public mychargeNow404():number{

        return this.charge;

    }

    public getNumberCalls():number{

        return this.numberCallsDone;
    }

    public setNumberCallsZero():void{

        this.numberCallsDone = 0;
        
    }   
}


/////////////////////////////////////////////////////////////////////////

class SecondUser implements smartPhoneInterface{
    
    public charge:number;
    public numberCallsDone:number;

    constructor(recharge:number, numberCallsDone:number){
        this.charge = recharge;
        this.numberCallsDone = numberCallsDone;
    }

    public recharge(x:number):void{
        this.charge = this.charge + x;
        
    }

    public oneCallDone(min:number):void{

         this.charge - (0.20 * min);
         this.numberCallsDone += 1;

    }

    public mychargeNow404():number{

        return this.charge;

    }

    public getNumberCalls():number{

        return this.numberCallsDone;
    }

    public setNumberCallsZero():void{

        this.numberCallsDone = 0;
        
    }   

}

////////////////////////////////////////////////////////////////////////////////////////

class ThirdUser implements smartPhoneInterface{
    
    public charge:number;
    public numberCallsDone:number;

    constructor(recharge:number, numberCallsDone:number){
        this.charge = recharge;
        this.numberCallsDone = numberCallsDone;
    }
    public recharge(x:number):number{
    
        this.charge = this.charge + x    

        return this.charge
    }


    

    public oneCallDone(min:number):number{

        // per non eseguire chiamate se il saldo è negativo mettiamo una condizione
        if (this.charge > 0){

        this.charge -= (0.20 * min);
        this.numberCallsDone = this.numberCallsDone + 1;
       }else {
           console.log("non hai credito sufficiently");
           
       }

       return this.numberCallsDone
    }

    public mychargeNow404():number{
        return this.charge;

    }

    public getNumberCalls():number{

        return this.numberCallsDone;
    }

    public setNumberCallsZero():void{

        this.numberCallsDone = 0;
        
    }   

}


let rechargeInputImport:HTMLInputElement|null = document.querySelector<HTMLInputElement>("#rechange");
let rechargeButton:HTMLInputElement|null = document.querySelector("#ricarica")

let callButton:HTMLInputElement|null = document.querySelector("#call");

let myChargebutton:HTMLInputElement|null = document.querySelector("#saldoAttuale");
let divShowSaldo:HTMLElement = document.querySelector("#showSaldo");

let pippoPhone = new ThirdUser (0, 0)   //Pippo ha comprato un cellulare con 0 min e 0 chiamate effettuare (Logico)

console.log( "Pippo ha il tuo saldo pari a "  + pippoPhone.charge);



rechargeButton?.addEventListener("click", function () {
    let importoRicarica = Number(rechargeInputImport.value);
    let unaRicaricaPerPippo = pippoPhone.recharge(importoRicarica);
    
console.log("adesso il tuo saldo pari a " +  unaRicaricaPerPippo);

})

callButton?.addEventListener("click", function () {

    let totaleChiamateEffettuate = pippoPhone.oneCallDone(1);
    
    console.log("hai fatto la chiamata n. " + totaleChiamateEffettuate);

})

myChargebutton?.addEventListener("click", function () {
    

    divShowSaldo.innerHTML += `${pippoPhone.mychargeNow404()}`
    console.log(`il tuo saldo attuale è   ${pippoPhone.mychargeNow404()}`);



})




