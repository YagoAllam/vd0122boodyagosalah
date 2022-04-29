function cambiaSfondo(e){
   

   /* let blocchi = document.getElementsByClassName ("blocco")


    blocchi[e].style.backgroundColor = "red"*/

    let colore = e.getAttribute("data-colore")
    console.log(colore);

    // e.style.backgroundColor = colore;



if(e.style.backgroundColor == ""){
    e.style.backgroundColor = colore;
} else{e.style.backgroundColor = ""

}
}




