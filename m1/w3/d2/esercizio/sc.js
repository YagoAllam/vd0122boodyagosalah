
let nome = "Marioo"

Var cognome ="Giovanni"

document.write(cognome)


console.log(nome)


document.write(cognome)


var numero1 = 10
var numero2 = 30

console.log(numero1 + numero2);


var saluto = "ciao";
var domanda = "Com'è oggi il tempo?";
var domanda2 = 'Com\'è oggi il tempo?';
var html = '<div class="blocco"></div>';
var html2 = "<div class=\" blocco \"></div>";


var nome = 'Giovanni';
var frase = "Ciao " + nome + " come stai?";
var frase2 = `Ciao ${nome}, come stai?`;

console.log(frase2,'color:red');
console.log(frase2.length);
console.log( frase2[0] );
var ultimoIndice = frase2.length - 1;
console.log( frase2[ ultimoIndice ] );

console.log( ''.length );



console.log('%c log colorato','color:red;font-size:30px');

const PASSWORD = 'KJHYG438765687EWRTGFUH';
console.log(PASSWORD);




var x = 1;
{
    console.log(x);
}

let y = 2;
{
    console.log(y);
}


{
    var x2 = 1;
    console.log(x2);
}


function scriviSaluto(){
    var s = 'Ciao';
    document.write(s)
    return s;
}

console.log(scriviSaluto());

scriviSaluto();



let num = 4;
let testo = '4';
let prezzo = '4€';

console.log(num + testo);
console.log(num * testo);
console.log(num * prezzo);

let bool = true;
let valore = "<br>il valore della variabile booleana è " + bool + '<br>';
document.write(valore);

console.log(num * bool);

let booleano = Number(true);
let errore = Number('4a');
let stringa = String(4);
console.log(booleano, errore, stringa);

let arr = ['a','b','c','d',60];
document.write(arr);


let anni = 10;
if(anni = 11){
    console.log('vero', anni)
}


let nomi = 'Mario, Giovanni, ';

nomi += 'Carlo';
console.log(nomi);

let conto = 5;
conto += 5;
conto += 5;
console.log(conto);


_______________________________________________________


let num = 7
let tsr = "etst"
let bool = true
let arr = []
let obj = {}


console.log(
    typeof num,
    typeof str,
 

);