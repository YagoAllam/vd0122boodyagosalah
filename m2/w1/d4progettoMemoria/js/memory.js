wlet arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
//libreria per icone
//https://html-css-js.com/html/character-codes/


let arrayComparison = [];

document.body.onload = startGame();

let interval;// mi serviranno alcune variabili 1. interval

// 2. una agganciata alla classe find 
let find = document.getElementsByClassName('find');
// 3. una agganciata al'id modal
let modal = document.getEleementById('modal');
// 4. una agganciata alla classe timer
let tempo = document.getElementsByClassName('timer');


// creo il timer anche se non so se melo chiede un altra volta dopo:

let now = new Date();
now.setMinutes(0);
now.setSeconds(0);

let timer = setInterval(() => {
    now.setSeconds(now.getSeconds() + 1);
    
}, 1000);

document.getElementsByClassName('timer').value = timer



//una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)

function casuale(arrayAnimali) {
    
for (let i = 0; i < arrayAnimali.length; i++) {
    let random = Math.round(Math.random()*arrayAnimali.length)
    let temp = arrayAnimali[i]
    arrayAnimali[i] = arrayAnimali[random]
    arrayAnimali[random] = temp
    console.log(arrayAnimali);
}

}



function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}

// una funzione che rimuove la classe active e chiama la funzione startGame()




function rimuove(elemento, classe) {
    elemento.classList.remove(classe);
    

    startGame() 
    
    
}



// la funzione startGame che pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali
function startGame() {

    clearInterval(timer);
    let arrayVuoto = [];
    casuale(arrayAnimali);
    
}

// (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia, 

var arrayShuffle = shuffle(arrayAnimali);

let griglia = document.getElementsById('griglia');



// pulisce tutti gli elementi che eventualmente contiene

griglia.innerHTML = "";


// poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo


function creaGriglia(arrayAnimali) {
    for (let i = 0; i < arrayAnimali.length; i++) {
        griglia.innerHTML += `
            <div id="div-${i}">
                ${array[i]}
            </div>
        `;
    }
}


// chiama la funzione timer e associa a tutti 
// gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto

timer();

let icon = document.getElementsByClassName("icon")

icon.addEventListener("click", displayIcon)



function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];

    /*
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    è uguale a 
    var icons = document.getElementsByClassName("icon");
    //var icons = [...icon];
    è un operatore che serve per passare un array come argomento:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    https://www.tutorialspoint.com/es6/es6_operators.htm (cerca spread nella pagina)
    */

    //mette/toglie la classe show
    this.classList.toggle("show");
    //aggiunge l'oggetto su cui ha cliccato all'array del confronto
    arrayComparison.push(this);

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
        //se sono uguali aggiunge la classe find
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}

//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte

// una funzione che nasconde la modale alla fine e riavvia il gioco

// una funzione che calcola il tempo e aggiorna il contenitore sotto
