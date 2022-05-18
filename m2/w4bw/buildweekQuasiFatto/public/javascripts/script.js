/*
// ********************** PARTE DI FLAVIO
//indicare id utente da eliminare alla fine
fetch("http://jsonplaceholder.typicode.com/users/13", {
    method: 'DELETE'
})

//Aggiunta
let data = {
    name: "Flavio",
    username: "Flavio213",
    email: "mail@maiul.com",
}
fetch("http://jsonplaceholder.typicode.com/users/", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'Application/json'}
})

//Edit
fetch("http://jsonplaceholder.typicode.com/users/13", {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'Application/json'}
}).then(function(response){
    console.log(response);
})


fetch("http://jsonplaceholder.typicode.com/users/13").then(res=>res.json()).then(res=>{})
*/

const APPURL = 'https://jsonplaceholder.typicode.com/users'
let tabella = document.querySelector('#tbody')
let editNome = document.getElementById('editNome')
let editUsername = document.getElementById('editUsername')
let editEmail = document.getElementById('editEmail')
let editTelefono = document.getElementById('editTelefono')
let editWebsite = document.getElementById('editWebsite')
let editVia = document.getElementById('editVia')
let editCivico = document.getElementById('editCivico')
let editCitta = document.getElementById('editCitta')
let editCap = document.getElementById('editCap')
let editID = document.getElementById('idUtente')
let vediModal = document.getElementById('viewModalContent')
fetch(APPURL)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        for (let utente of res) {
            let table = document.getElementById('utenti')
            table.classList.add('table')
            table.classList.add('table-bordered')
            table.classList.add('table-striped')
            let tr = document.createElement('tr')
            let tdID = document.createElement('td')
            tdID.innerHTML = utente.id
            let tdName = document.createElement('td')
            tdName.innerHTML = utente.name
            let tdUser = document.createElement('td')
            tdUser.innerHTML = utente.username
            let tdEmail = document.createElement('td')
            tdEmail.innerHTML = utente.email
            let tdPhone = document.createElement('td')
            tdPhone.innerHTML = utente.phone
            let tdWebsite = document.createElement('td')
            tdWebsite.innerHTML = utente.website
            tr.append(tdID, tdUser, tdName, tdEmail, tdPhone, tdWebsite)

            // ****** BOTTONE VEDI
            let tdVedi = document.createElement('td')
            let btnVedi = document.createElement('button')
            btnVedi.innerHTML = '<i class="bi bi-eye"></i>'
            btnVedi.setAttribute("data-bs-toggle", "modal");
            btnVedi.setAttribute("data-bs-target", "#viewModal");
            btnVedi.classList.add('btn', 'btn-primary', 'viewButton')
            btnVedi.addEventListener('click', function () {
                fetch(APPURL + '/' + utente.id, {
                    method: 'GET'
                }).then(function (res) {
                    console.log(res);
                    if (vediModal.innerHTML !== "") {
                        vediModal.innerHTML = ""
                        vediModal.innerHTML = (` <h4>ID</h4> <p> ${utente.id} </p> <hr> <h4>Username</h4> <p> ${utente.username} </p> <hr> <h4>Nome e cognome</h4> <p> ${utente.name} </p> <hr> <h4>Email</h4> <p> ${utente.email} </p> <hr> <h4>Numero</h4> <p> ${utente.phone} </p> <hr> <h4>Sito web</h4> <p> ${utente.website} </p> <hr> <h4>Indirizzo</h4> <h5>Via</h5> <p> ${utente.address.street} </p> <h5>N° civico</h5> <p> ${utente.address.suite} </p> <h5>Città</h5> <p> ${utente.address.city} </p> <h5>CAP</h5> <p> ${utente.address.zipcode} </p>`)
                    } else (vediModal.innerHTML = (` <h4>ID</h4> <p> ${utente.id} </p> <hr> <h4>Username</h4> <p> ${utente.username} </p> <hr> <h4>Nome e cognome</h4> <p> ${utente.name} </p> <hr> <h4>Email</h4> <p> ${utente.email} </p> <hr> <h4>Numero</h4> <p> ${utente.phone} </p> <hr> <h4>Sito web</h4> <p> ${utente.website} </p> <hr> <h4>Indirizzo</h4> <h5>Via</h5> <p> ${utente.address.street} </p> <h5>N° civico</h5> <p> ${utente.address.suite} </p> <h5>Città</h5> <p> ${utente.address.city} </p> <h5>CAP</h5> <p> ${utente.address.zipcode} </p>`));
                })
            })
            tdVedi.append(btnVedi)
            tr.append(tdVedi)

            // let bottoneVedi = document.getElementsByClassName('viewButton');
            // console.log(bottoneVedi);
            // let vediModal = document.getElementById('viewModalContent');
            // let provaTesto = 'bla bla bla';
            // console.log(bottoneVedi.length);
            // for (let vedi of bottoneVedi) {
            //     console.log(vedi);
            //     vedi.addEventListener('click', function () {
            //         vediModal.append(provaTesto);
            //         console.log(provaTesto);
            //     });
            // }

            // ****** FINE BOTTONE VEDI

            // ****** BOTTONE MODIFICA
            let tdModifica = document.createElement('td')
            let btnModifica = document.createElement('button')
            btnModifica.innerHTML = '<i class="bi bi-pencil-square"></i>'
            btnModifica.setAttribute("data-bs-toggle", "modal");
            btnModifica.setAttribute("data-bs-target", "#editModal");
            btnModifica.classList.add('btn', 'btn-warning', 'editButton')
            btnModifica.addEventListener('click', function () {
                fetch(APPURL + '/' + utente.id, {
                    method: 'GET'
                }).then(function (res) {
                    console.log(res);
                    editNome.value = utente.name
                    editUsername.value = utente.username
                    editEmail.value = utente.email
                    editTelefono.value = utente.phone
                    editWebsite.value = utente.website
                    editVia.value = utente.address.street
                    editCivico.value = utente.address.suite
                    editCitta.value = utente.address.city
                    editCap.value = utente.address.zipcode
                    editID.value = utente.id
                })

            })

            tdModifica.append(btnModifica)
            tr.append(tdModifica)

            // ****** FINE BOTTONE MODIFICA

            // ***** BOTTONE ELIMINA
            let tdElimina = document.createElement('td')
            let btnElimina = document.createElement('button')
            btnElimina.innerHTML = '<i class="bi bi-trash"></i>'
            btnElimina.classList.add('btn', 'btn-danger')
            btnElimina.addEventListener('click', function () {
                fetch(APPURL + '/' + utente.id, {
                    method: 'DELETE'
                }).then(function (res) {
                    console.log(res);
                }).then(res => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Utente eliminato',
                        html: `L'utente ${utente.name} è stato eliminato con successo!`,
                    })
                })
            })
            tdElimina.append(btnElimina)
            tr.append(tdElimina)
            // ****** FINE BOTTONE ELIMINA

            tabella.append(tr)

            console.log(APPURL + '/' + utente.id);
        }
    })

//******* AGGIUNGI UTENTE
let bottone = document.querySelector('#aggiungi')

bottone.addEventListener('click', function (e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let username = document.querySelector('#username')
    let email = document.querySelector('#email')
    let telefono = document.querySelector('#telefono')
    let website = document.querySelector('#website')
    let via = document.querySelector('#via')
    let civico = document.querySelector('#civico')
    let citta = document.querySelector('#citta')
    let cap = document.querySelector('#cap')

    let user = {
        name: name.value,
        username: username.value,
        email: email.value,
        phone: telefono.value,
        website: website.value,
        address: {
            street: via.value,
            suite: civico.value,
            city: citta.value,
            zipcode: cap.value,
        }
    }

    fetch(APPURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(function (res) {
            console.log(res);
        }).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Utente aggiunto',
                html: `L'utente ${user.name} è stato aggiunto con successo!`,
            })

        })
})

console.log('test1');

let salvaModifica = document.getElementById('salvaModifica')
salvaModifica.addEventListener('click', function () {

    let user = {
        name: editNome.value,
        username: editUsername.value,
        email: editEmail.value,
        phone: editTelefono.value,
        website: editWebsite.value,
        address: {
            street: editVia.value,
            suite: editCivico.value,
            city: editCitta.value,
            zipcode: editCap.value,
        }
    }

    fetch(APPURL + '/' + editID.value, {
        method: 'PUT',
        body: JSON.stringify(user)
    }).then(function (res) {
        console.log(res);

    }).then(res => {
        Swal.fire({
            icon: 'success',
            title: 'Utente aggiornato',
            html: `L'utente ${user.name} è stato aggiornato con successo!`,
        })

    })
})


// ************* SEARCH BAR

const userCardTemplate = document.querySelector('[data-user-template]')
const userCardContainer = document.querySelector('[data-user-cards-container]')

const card = document.querySelectorAll('.card')
// const arrayCard = Array.from(card);

// for (const carta of card) {
//     let buttonVedi = document.createElement('button')
//     cardA.appendChild(buttonVedi)
    

    
// }
const searchInput = document.querySelector('[data-search]')

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value)
        user.element.classList.toggle('hide', !isVisible)
        if (searchInput.value == '') {
            userCardContainer.classList.add('d-none')
        } else {
            userCardContainer.classList.remove('d-none')


        }

    });
})



fetch(APPURL)
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            console.log(card);
            const header = card.querySelector('[data-header]')
            const body = card.querySelector('[data-body')
            header.textContent = user.name
            body.textContent = user.email
            userCardContainer.append(card)
            card.addEventListener("click", () =>
            { document.getElementsByClassName("viewButton")[user.id -1].click()
            
            
            const id = card.querySelector('[data-id]')
            id.textContent = user.id

            // for (let id of user.id) {
                
            // }

            

            // let ordine = user.id




            })


            return { name: user.name, email: user.email, element: card }

        })
    })



    

// ************* FINE SEARCH BAR



// for (var i = 0; i < bottoneVedi.length; i++) {
//     bottoneVedi[i].addEventListener('click', function () {
//         console.log(provaTesto);
//     });
// }


// for (let vedi of bottoneVedi) {
//     vedi.addEventListener('click', function () {
//         vediModal.append(provaTesto)
//         console.log('test2');
//     })
// }

// bottoneVedi.addEventListener('click', function () {
//     console.log('test_vedi');
// })

// consigli flavio:
// Non usare file .json
// Utilizziamo il file json online con l'URL, ma non potremo aggiungere o cancellare nel json

// ****** BOTTONE MODIFICA (BACKUP)
// let tdModifica = document.createElement('td')
// let btnModifica = document.createElement('button')
// btnModifica.innerHTML = '<i class="bi bi-pencil-square"></i>'
// btnModifica.classList.add('btn', 'btn-warning')
// btnModifica.addEventListener('click', function () {
//     fetch(APPURL + '/' + utente.id, {
//         method: 'PUT'
//     }).then(function (res) {
//         console.log(res);
//     })
// })
// tdModifica.append(btnModifica)
// tr.append(tdModifica)
// ****** FINE BOTTONE MODIFICA