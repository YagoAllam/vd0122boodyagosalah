let budgetIniziale = 1000

let s1 = Math.random() * 100
let budgetAttuale = budgetIniziale 

function spesa(s) {

   budgetAttuale = budgetAttuale - s

    if (budgetAttuale > 500) {
        document.getElementById("budget").innerHTML += "tranquillo hai ancora a disposizione una somma pari a" + " " + budgetAttuale
    }
    else {
        document.getElementById("budget").innerHTML += "sei sotto i 500 euo, occhio tesoro, hai solo alcuni euro:"+ " " + budgetAttuale
    }

}

// let ba = spesa(s1)

while ( budgetAttuale > 10) {
    s1 = Math.random() * 50
    spesa(s1) 

}









// let ba = spesa(s1)

// console.log(ba);

// let s2 = Math.random() * 200

// function spesa2(s2) {

//     let budgetAttuale2 = ba - s2;

//     if (budgetAttuale2 > 500) {
//         document.getElementById("budget1").innerHTML += "tranquillo hai ancora a disposizione una somma pari a" + " " + budgetAttuale2
//     }
//     else {
//         document.getElementById("budget1").innerHTML += "sei sotto i 500 euo, occhio tesoro, hai solo alcuni euro:"+ " " + budgetAttuale2
//     }
//     return spesaAttuale
    

// }















// function spesa2(s) {
//     s = Math.random() * 300
//     budgetattuale = document.getElementById("budget").innerHTML

//     console.log(budgetattuale);

//     let budgetRettificato2 = document.getElementById("budget").innerHTML - s;

//     if (budgetRettificato2 > 500) {
//         document.getElementById("budget1").innerHTML += "tranquillo hai ancora a disposizione una somma pari a" + " " + budgetRettificato2
//     }
//     else {
//         document.getElementById("budget1").innerHTML += "sei sotto i 500 euo, occhio tesoro"
//     }
//     return


// }

// console.log(budgetRettificato2);

// function spesa3(s) {
//     s = Math.random() * 300

//     let budgetRettificato3 = budgetRettificato2 - s;

//     if (budgetRettificato3 > 500) {
//         document.getElementById("budget2").innerHTML += "tranquillo hai ancora a disposizione una somma pari a" + " " + budgetRettificato2
//     }
//     else {
//         document.getElementById("budget2").innerHTML += "sei sotto i 500 euo, occhio tesoro"
//     }


// }



