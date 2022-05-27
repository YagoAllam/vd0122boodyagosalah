var inputg1 = document.querySelector('#player1');
var inputg2 = document.getElementById('player2');
var output = document.getElementById('output');
var button = document.getElementById('gioca');
var winner = document.querySelector('#winner');
var numeroACaso = output.innerHTML = Math.floor(Math.random() * (100 - 1) + 1);
button.addEventListener('click', function compara() {
    var compNumPlayer1 = Math.abs(inputg1.value - numeroACaso);
    var compNumPlayer2 = Math.abs(inputg2.value - numeroACaso);
    if (compNumPlayer1 > compNumPlayer2) {
        console.log("ha vinto player2");
        winner.innerHTML = "ti sei avvicinato giocatore 2 per\u00F2 ti manca ".concat(Math.abs(inputg2.value - numeroACaso), " per vincere\n        ");
    }
    else {
        console.log("ha vinto player1");
        winner.innerHTML = "ti sei avvicinato bello giocatore 1 per\u00F2 ti manca ti manca ".concat(Math.abs(inputg2.value - numeroACaso), " per vincere\n        ");
    }
});
