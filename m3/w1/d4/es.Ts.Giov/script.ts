class Abbigliament {
    public id:number;
    public codprod:number;
    public collezione:string;
    public capo:string;
    public modello:number;
    public quantità:number;
    public colore:string;
    public prezzoivaesclusa:number;
    public prezzoivainclusa:number;
    public disponibile:string;
    public saldo:number;


    constructor(id:number, codprod:number,collezione:string,capo:string,modello:number,quantità:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number) {  
        this.id = id;   
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;

    }

    public getSaldoCapo():number{
         
        let prezzoScontato:number = this.prezzoivainclusa - (this.prezzoivainclusa * this.saldo / 100)

        return prezzoScontato

    }

    public getAquistoCapo():number{
         
        let prezzoScontato:number = this.prezzoivainclusa 

        return prezzoScontato

    }

}


let AppURL:string = "/Abbigliamento.json"

fetch(AppURL)
.then(res => res.json()).then(res => {
    console.log(res);
    

    let array =[]

    for (let i=0; i<res.length; i++) {

        
   
        let abb = new Abbigliament(res[i].id, res[i].codprod, res[i].collezione, res[i].capo, res[i].modello, res[i].quantità, res[i].colore, res[i].prezzoivaesclusa, res[i].prezzoivainclusa, res[i].disponibile, res[i].saldo)

        console.log(abb);
        


        array.push(abb)

    


    }

    console.log(array);

    for (let a of array) {

        console.log(Abbigliament.getAquistoCapo());
        
        
    }
    

    

    




})


// "id": 1,
// "codprod":2121,
// "collezione":"primavera",
// "capo":"cardigan",
// "modello":1231,
// "quantita":5,
// "colore":"nero",
// "prezzoivaesclusa":18.50,
// "prezzoivainclusa":22.57,
// "disponibile":"negozio",
// "saldo":45