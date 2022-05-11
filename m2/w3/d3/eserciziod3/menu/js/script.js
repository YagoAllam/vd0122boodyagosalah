fetch("json/menu.json")
.then(res => {
    console.log(res);

    if(res.ok)
    console.log('caricamento completato');
    return res.json()

}).then(pizze => {

    console.log(pizze)
    console.log(pizze[0])


    pizze.forEach(pizza => {
        document.write(pizza.gusto + '<br>')

        pizza.dimensioni.forEach(d => {
            document.write(d + ', ')
        })
        
        document.write('<hr>')
    })

})

/**
 * 
 * versione che di solito si usa
fetch("json/menu.json")
.then(res => res.json())
.then(pizze => {
    //fa qualcosa
})
 * 
 */