let inputg1 = document.querySelector('#player1');
let inputg2 = document.getElementById('player2');

let output:HTMLElement|null = document.getElementById('output');

let button:HTMLElement|null = document.getElementById('gioca');

let winner = document.querySelector('#winner');

let numeroACaso = output.innerHTML = Math.floor(Math.random()*(100-1) +1)

button.addEventListener('click',function compara(){

    let compNumPlayer1:number = Math.abs(inputg1.value - numeroACaso)
     
    let compNumPlayer2:Number =  Math.abs(inputg2.value - numeroACaso)

    if (compNumPlayer1 > compNumPlayer2) {

        console.log("ha vinto player2");
        winner.innerHTML = `ti sei avvicinato giocatore 2 però ti manca ${Math.abs(inputg2.value - numeroACaso)} per vincere
        `
        
        
        
        
    }else{
        console.log("ha vinto player1");
        winner.innerHTML =`ti sei avvicinato bello giocatore 1 però ti manca ti manca ${Math.abs(inputg2.value - numeroACaso)} per vincere
        `
        
    }


    
})







