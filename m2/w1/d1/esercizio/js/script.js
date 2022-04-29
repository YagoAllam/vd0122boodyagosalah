let dataDiOggi = new Date();

console.log(dataDiOggi);

dataDiOggi.getTime()

console.log(dataDiOggi);

dataDiOggi.getDay()
console.log(dataDiOggi.getDay());



function mostradata() {


    let data = new Date();
    let Hh, Mm, Ss, mm;
    Hh = data.getHours() + ":";
    Mm = data.getMinutes() + ":";
    Ss = data.getSeconds() + ":";
    mm = data.getMilliseconds() + ":";

 
    let forma = ("Sono le ore " + Hh + Mm + Ss + mm)

    document.getElementById('datadioggi').innerHTML += forma;



}

function oraAdesso() {

    var ora = new Date();
    var gg, mm, aaaa;
    gg = ora.getDate() + "/";
    mm = ora.getMonth() + 1 + "/";
    aaaa = ora.getFullYear();


    let cazzona = ("Oggi è il " + gg + mm + aaaa)

    document.getElementById('oracazzona').innerHTML += cazzona;



}