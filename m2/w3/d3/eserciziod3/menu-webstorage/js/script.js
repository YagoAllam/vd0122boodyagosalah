let bottone = document.querySelector('#salva')

bottone.addEventListener('click', function(e){
    e.preventDefault();
    
    let gusto = document.querySelector('#gusto')
    let tipo = document.querySelector('#tipo')
    let prezzo = document.querySelector('#prezzo')

    let mini = document.querySelector('#mini') 
    let normale = document.querySelector('#normale')
    let mezzoMetro = document.querySelector('#mezzo-metro')

    let disponibile = document.querySelector('#disponibile')

    

    let dimensioni = []
    if(mini.checked){
        dimensioni.push(mini.value
    }
    if(normale.checked){
        dimensioni.push(normale.value)
    }
    if(mezzoMetro.checked){
        dimensioni.push(mezzoMetro.value)
    }

    let pizza = {
        gusto: gusto.value,
        tipo: tipo.value,
        prezzo: prezzo.value,
        dimensioni: dimensioni,
        disponibile: disponibile.checked
    }


    let pizzeSalvate = localStorage.getItem('pizze')
    if(pizzeSalvate != null){
        var db = JSON.parse(pizzeSalvate)
    }else{
        var db = [] 
    }
    
    db.push(pizza)

    let jsonPizze = JSON.stringify(db)

    localStorage.setItem('pizze',jsonPizze)


})
