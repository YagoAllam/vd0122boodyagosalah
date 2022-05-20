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
let salvaModifica = document.getElementById('salvaModifica')

let bottone = document.querySelector('#aggiungi')
let nome = document.querySelector('#name')
let username = document.querySelector('#username')
let email = document.querySelector('#email')
let telefono = document.querySelector('#telefono')
let website = document.querySelector('#website')
let via = document.querySelector('#via')
let civico = document.querySelector('#civico')
let citta = document.querySelector('#citta')
let cap = document.querySelector('#cap')

let vediModal = document.getElementById('viewModalContent')
let btnAvanti = document.getElementById('btnAvanti')
let btnIndietro = document.getElementById('btnIndietro')
let selectPages = document.getElementById('selectPages');
let usersPerPage = selectPages.value;
console.log(usersPerPage);
let currentPage = 0;
let start = 0;
let righe = [];

window.onload = (event) => {
    btnIndietro.classList.add('disabled');
    btnAvanti.classList.add('disabled');
};

let nPagine = righe.length / Number.parseInt(selectPages.value)
console.log(righe.length);
if (currentPage == nPagine - 1) {
    btnAvanti.classList.add('disabled')
}

const validate = (e) => {
    e.preventDefault();
    if (nome.value === "") {
        alert("Inserisci il tuo nome e cognome.");
        nome.focus();
        editNome.focus();
        return false;
    }
    if (username.value === "") {
        alert("Inserisci il tuo username.");
        username.focus();
        return false;
    }
    if (email.value === "") {
        alert("Inserisci la tua email.");
        email.focus();
        return false;
    }
    if (telefono.value === "") {
        alert("Inserisci il tuo numero di telefono.");
        telefono.focus();
        return false;
    }
    if (website.value === "") {
        alert("Inserisci il tuo sito web.");
        website.focus();
        return false;
    }
    if (via.value === "") {
        alert("Inserisci la tua via.");
        via.focus();
        return false;
    }
    if (civico.value === "") {
        alert("Inserisci il tuo civico.");
        civico.focus();
        return false;
    }
    if (citta.value === "") {
        alert("Inserisci una città.");
        citta.focus();
        return false;
    }
    if (cap.value === "") {
        alert("Inserisci il CAP.");
        cap.focus();
        return false;
    }

    return true;
}

bottone.addEventListener('click', (e) => {
    e.preventDefault()
    validate(e)
    post(e)
})

const validateEdit = (e) => {
    e.preventDefault(e);
    if (editNome.value === "") {
        alert("Inserisci il nome e cognome.");
        editNome.focus();
        return false;
    }
    if (editUsername.value === "") {
        alert("Inserisci il tuo username.");
        editUsername.focus();
        return false;
    }
    if (editEmail.value === "") {
        alert("Inserisci la tua email.");
        editEmail.focus();
        return false;
    }
    if (editTelefono.value === "") {
        alert("Inserisci il tuo numero di telefono.");
        editTelefono.focus();
        return false;
    }
    if (editWebsite.value === "") {
        alert("Inserisci il tuo sito web.");
        editWebsite.focus();
        return false;
    }
    if (editVia.value === "") {
        alert("Inserisci la tua via.");
        editVia.focus();
        return false;
    }
    if (editCivico.value === "") {
        alert("Inserisci il tuo civico.");
        editCivico.focus();
        return false;
    }
    if (editCitta.value === "") {
        alert("Inserisci una città.");
        editCitta.focus();
        return false;
    }
    if (editCap.value === "") {
        alert("Inserisci il CAP.");
        editCap.focus();
        return false;
    }

    return true;
}
salvaModifica.addEventListener('click', validateEdit);

function avanti() {
    currentPage++
    tabella.innerHTML = ''
    btnIndietro.classList.remove('disabled')
    for (let l = currentPage * selectPages.value; l < selectPages.value * (currentPage + 1); l++) {
        tabella.append(righe[l]);
    }
    let nPagine = righe.length / Number.parseInt(selectPages.value)
    if (currentPage == nPagine - 1) {
        btnAvanti.classList.add('disabled')
    }
}
function indietro() {
    currentPage--
    tabella.innerHTML = ''
    btnAvanti.classList.remove('disabled')

    for (let l = currentPage * selectPages.value; l < (currentPage + 1) * selectPages.value; l++) {
        tabella.append(righe[l]);
    }
    if (currentPage == 0) {
        btnIndietro.classList.add('disabled')
    }
}

btnAvanti.addEventListener('click', avanti)
btnIndietro.addEventListener('click', indietro)

fetch(APPURL)
    .then(res => res.json())
    .then(res => {
        selectPages.addEventListener('change', function pageNumber() {
            tabella.innerHTML = ''
            for (let l = 0; l <= this.value - 1; l++) {
                tabella.append(righe[l]);
                let nPagine = righe.length / Number.parseInt(selectPages.value)
                console.log(righe.length);
                if (currentPage == nPagine - 1) {
                    btnAvanti.classList.add('disabled')
                } else {
                    btnAvanti.classList.remove('disabled')
                }
            }
        })

        console.log(res);
        for (let utente of res) {
            let table = document.getElementById('utenti')
            table.classList.add('table')
            table.classList.add('table-bordered')
            table.classList.add('table-striped')
            let tr = document.createElement('tr')
            let tdID = document.createElement('td')
            tdID.innerHTML = utente.id
            tdID.classList.add('fw-bold', 'text-center', 'align-middle')
            let tdName = document.createElement('td')
            tdName.innerHTML = utente.name
            tdName.classList.add('align-middle')
            let tdUser = document.createElement('td')
            tdUser.innerHTML = utente.username
            tdUser.classList.add('align-middle')
            let tdEmail = document.createElement('td')
            tdEmail.innerHTML = utente.email
            tdEmail.classList.add('align-middle')
            let tdPhone = document.createElement('td')
            tdPhone.innerHTML = utente.phone
            tdPhone.classList.add('align-middle')
            let tdWebsite = document.createElement('td')
            tdWebsite.innerHTML = utente.website
            tdWebsite.classList.add('align-middle')
            tr.append(tdID, tdUser, tdName, tdEmail, tdPhone, tdWebsite)

            let tdVedi = document.createElement('td')
            tdVedi.classList.add('text-center')
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

            let tdModifica = document.createElement('td')
            tdModifica.classList.add('text-center')
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

            let tdElimina = document.createElement('td')
            tdElimina.classList.add('text-center')
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
            tabella.append(tr)
        }
        righe = document.querySelectorAll('#tbody tr')
    })



function post(e) {
    e.preventDefault()

    let user = {
        name: nome.value,
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

    if (validate(e)) {
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
    } else {
    }
}

console.log('test1');
salvaModifica.addEventListener('click', function (e) {

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

    if (validateEdit()) {
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
    } else { }
})


const userCardTemplate = document.querySelector('[data-user-template]')
const userCardContainer = document.querySelector('[data-user-cards-container]')

const card = document.querySelectorAll('.card')
const searchInput = document.querySelector('[data-search]')

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.username.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value) ||
            user.website.toLowerCase().includes(value) ||
            user.phone.toLowerCase().includes(value)
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
            const header = card.querySelector('[data-header]')
            const username = card.querySelector('[data-username]')
            const body = card.querySelector('[data-body]')
            const website = card.querySelector('[data-website]')
            const phone = card.querySelector('[data-phone]')
            header.textContent = `${user.name}`
            username.textContent = `Username: ${user.username}`
            body.textContent = `Email: ${user.email}`
            website.textContent = `Sito web: ${user.website}`
            phone.textContent = `Numero: ${user.phone}`
            userCardContainer.append(card)
            card.addEventListener("click", () => {
                righe[user.id - 1].querySelector(".viewButton").click()
                let array = Array.from(righe)
                let utente = array.find(element => element.querySelector(".fw-bold").innerHTML == user.id)
                utente.querySelector(".viewButton").click()
                $('#viewModal').modal('show')
            })
            return { name: user.name, username: user.username, email: user.email, website: user.website, phone: user.phone, element: card }
        })
    })

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

function nextPage() {
    if (currentPage < pageNumber()) {
        currentPage++;
        changePage(currentPage);
    }
}