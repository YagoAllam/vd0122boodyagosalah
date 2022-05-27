"use strict";
// sarebbe stato più oppurtono usare una abstract per definire le funzioni di ricarica, getnumerochiamata ecc solo una volta visto che non cambiano da User a altro. Però la traccia voleva Interface quidni commento questa soluzione e continuo sotto con Interfac (cerco di modificare leggermente la funzionalità delle funzioni nel secondo e terzo User creando promozioni e piani tarrifari diversi :)
///////////////////////////////////////////////////////////////////////////////////
class FirstUser {
    constructor(recharge, numberCallsDone) {
        this.charge = recharge;
        this.numberCallsDone = numberCallsDone;
    }
    recharge(x) {
        this.charge = this.charge + x;
    }
    oneCallDone(min) {
        this.charge - (0.20 * min);
        this.numberCallsDone += 1;
    }
    mychargeNow404() {
        return this.charge;
    }
    getNumberCalls() {
        return this.numberCallsDone;
    }
    setNumberCallsZero() {
        this.numberCallsDone = 0;
    }
}
/////////////////////////////////////////////////////////////////////////
class SecondUser {
    constructor(recharge, numberCallsDone) {
        this.charge = recharge;
        this.numberCallsDone = numberCallsDone;
    }
    recharge(x) {
        this.charge = this.charge + x;
    }
    oneCallDone(min) {
        this.charge - (0.20 * min);
        this.numberCallsDone += 1;
    }
    mychargeNow404() {
        return this.charge;
    }
    getNumberCalls() {
        return this.numberCallsDone;
    }
    setNumberCallsZero() {
        this.numberCallsDone = 0;
    }
}
////////////////////////////////////////////////////////////////////////////////////////
class ThirdUser {
    constructor(recharge, numberCallsDone) {
        this.charge = recharge;
        this.numberCallsDone = numberCallsDone;
    }
    recharge(x) {
        this.charge = this.charge + x;
        return this.charge;
    }
    oneCallDone(min) {
        // per non eseguire chiamate se il saldo è negativo mettiamo una condizione
        if (this.charge > 0) {
            this.charge -= (0.20 * min);
            this.numberCallsDone = this.numberCallsDone + 1;
        }
        else {
            console.log("non hai credito sufficiently");
        }
        return this.numberCallsDone;
    }
    mychargeNow404() {
        return this.charge;
    }
    getNumberCalls() {
        return this.numberCallsDone;
    }
    setNumberCallsZero() {
        this.numberCallsDone = 0;
    }
}
let rechargeInputImport = document.querySelector("#rechange");
let rechargeButton = document.querySelector("#ricarica");
let callButton = document.querySelector("#call");
let myChargebutton = document.querySelector("#saldoAttuale");
let divShowSaldo = document.querySelector("#showSaldo");
let pippoPhone = new ThirdUser(0, 0); //Pippo ha comprato un cellulare con 0 min e 0 chiamate effettuare (Logico)
console.log("Pippo ha il tuo saldo pari a " + pippoPhone.charge);
rechargeButton === null || rechargeButton === void 0 ? void 0 : rechargeButton.addEventListener("click", function () {
    let importoRicarica = Number(rechargeInputImport.value);
    let unaRicaricaPerPippo = pippoPhone.recharge(importoRicarica);
    console.log("adesso il tuo saldo pari a " + unaRicaricaPerPippo);
});
callButton === null || callButton === void 0 ? void 0 : callButton.addEventListener("click", function () {
    let totaleChiamateEffettuate = pippoPhone.oneCallDone(1);
    console.log("hai fatto la chiamata n. " + totaleChiamateEffettuate);
});
myChargebutton === null || myChargebutton === void 0 ? void 0 : myChargebutton.addEventListener("click", function () {
    divShowSaldo.innerHTML += `${pippoPhone.mychargeNow404()}`;
    console.log(`il tuo saldo attuale è   ${pippoPhone.mychargeNow404()}`);
});
//# sourceMappingURL=app.js.map