var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(sl) {
        this.saldoIniziale = sl;
    }
    SonAccount.prototype.deposito = function (y) {
        this.saldoIniziale += y;
        return this.saldoIniziale;
    };
    Object.defineProperty(SonAccount.prototype, "leggiSaldo", {
        get: function () {
            return this.saldoIniziale;
        },
        enumerable: false,
        configurable: true
    });
    SonAccount.prototype.prelievo = function (z) {
        this.saldoIniziale - z;
        return this.saldoIniziale;
    };
    return SonAccount;
}());
var ContoMadre = /** @class */ (function (_super) {
    __extends(ContoMadre, _super);
    function ContoMadre(sl) {
        return _super.call(this, sl) || this;
    }
    ContoMadre.prototype.deposito = function (y) {
        return this.saldoIniziale;
    };
    ContoMadre.prototype.prelievo = function (z) {
        return this.saldoIniziale;
    };
    ContoMadre.prototype.interess = function (x) {
        this.saldoIniziale * x;
    };
    return ContoMadre;
}(SonAccount));
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
