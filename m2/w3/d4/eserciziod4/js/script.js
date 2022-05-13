const URLRequest = 'https://sofin.wp-admin.it/public/api/v1/user'

let submitbutton = document.querySelector('#submit');

submitbutton.addEventListener('click',function(e){
    e.preventDefault();

    let name = document.getElementById('name');
    let lastName = document.getElementById('cognome');
    let email = document.getElementById('email');
    let password = document.getElementById('password');


    let user = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }
    console.log(user);

    fetch(URLRequest,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },

        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(res => {

        Swal.fire({
            icon: 'success',
            title: 'Utente creato',
            html: `adesso sei il nostro bel utente con ${res.name} ${res.lastname} con id ${res.id}`,
        })

    })

})


let tabella = document.querySelector('#utenti');

fetch(URLRequest)
.then(res => res.json())
.then(res => {

    for (let user of res) {

        let tr = document.createElement('tr');

        let tdNome = document.createElement('td')
        tdNome.innerHTML = user.name
        
        let tdCognome = document.createElement('td')
        tdCognome.innerHTML = user.lastname
        
        let tdMail = document.createElement('td')
        tdMail.innerHTML = user.email

        
        let tdPassword = document.createElement('td')
        tdPassword.innerHTML = user.password

        tr.append(tdNome, tdCognome, tdPassword)


        
        
    }

})