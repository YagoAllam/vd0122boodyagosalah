

function calcolaAnni(data) {
    
    return data - 2002
   
    
    
}

function clicaBottone() {

    var min = 0;
    var max = 255;


    var red = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    var green = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    var blue = Math.floor( Math.random() * ( max - min + 1 ) ) + min;

    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}



function setOra() {
    var data = new Date();
    var ore = data.getHours();
    var minuti = data.getMinutes();
    var secondi = data.getSeconds();

    document.getElementById("orario").innerHTML = ore + ":" + minuti + ":" + secondi
    
}

setInterval(setOra, 1000)


