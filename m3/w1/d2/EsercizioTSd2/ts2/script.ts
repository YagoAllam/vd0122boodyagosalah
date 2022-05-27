
class SonAccount{
    saldoIniziale: number;

    constructor(sl: number){

    this.saldoIniziale = sl}

    public deposito(y:number):number{
       
    this.saldoIniziale += y
    return this.saldoIniziale
    }

    private get leggiSaldo():number{
      return  this.saldoIniziale

    }

    public prelievo(z:number):number{
    this.saldoIniziale - z
    return this.saldoIniziale

    }  

}

class ContoMadre extends SonAccount{
    constructor(sl: number){
        super(sl)
    }

    deposito(y:number):number{
        return this.saldoIniziale
    }

    prelievo(z:number):number{
        // return this.saldoIniziale
        return z
    }

    interess(int: number){
         return int * z
    }




}







// class SonAccount{}
// console.log('------------son account----------------- ' + '\n');
// // set della proprietà al costruttore
// let son = new SonAccount(0)
// console.log(son);
// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
// console.log('deposit:+' + son.deposit(1000));
// console.log('withdraw:-' + son.oneWithdraw(500));
// console.log('withdraw:-' + son.twoWithdraw(400));
// console.log('totalBalance:' + son.totalBalance());

// class MotherAccount {}
// let mother = new MotherAccount(0)
// console.log('--------------mother account----------------------------------' + '\n');
// console.log(mother);
// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
// console.log('deposit:+' + mother.deposit(1000));
// console.log('withdraw:-' + mother.oneWithdraw(500));
// console.log('withdraw:-' + mother.twoWithdraw(400));
// console.log('totalBalance:' + mother.totalBalance());
