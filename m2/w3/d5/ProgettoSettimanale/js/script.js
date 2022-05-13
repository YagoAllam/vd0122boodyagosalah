


const URLUSERS = "../js/json/users.json"
console.log(URLUSERS);

// create a head of table for users:

let trhead = document.querySelector("#trhead");


let thUserName = document.createElement("th")
thUserName.innerHTML = "User name";

let thFirstName = document.createElement("th")
thFirstName.innerHTML = "First name";

let thLastName = document.createElement("th")
thLastName.innerHTML = "Last name";

let thGender = document.createElement("th")
thGender.innerHTML = "Gender";

let thFoto = document.createElement("th")
thFoto.innerHTML = "Foto";

let thEmail = document.createElement("th")
thEmail.innerHTML = "email address";


trhead.append(thUserName, thFirstName, thLastName, thGender, thFoto, thEmail);

console.log(trhead);
console.log(thUserName);



// create the body of table for users with the fecht:


let tbody = document.querySelector("#tbody");



fetch(URLUSERS)
.then(res => res.json())
.then(res => {
    console.log(res);

    for (let user of res ) {
      console.log(user);
      


        let trbody = document.createElement('tr');
        
        let thUsernname = document.createElement('td');
        thUsernname.innerHTML = "username"

        let tdUsername = document.createElement('td')
        tdUsername.innerHTML = user.username
    
        let tdFirstName = document.createElement('td')
        tdFirstName.innerHTML = user.firstName
    
        let tdLastName = document.createElement('td')
        tdLastName.innerHTML = user.lastName
    
    
        let tdGender = document.createElement('td')
        tdGender.innerHTML = user.gender

        let tdImg = document.createElement('td')
        let imgUtente = document.createElement('img');
        imgUtente.src = ("user.profileURL")

        // non ho trovato foto con formato tessera da inserire nel file json
       
        tdImg.append(imgUtente)

        
        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = user.email

        trbody.append( tdUsername, tdFirstName, tdLastName, tdGender,tdImg , tdEmail);

        tbody.append(trbody)

    



        
    }


})
    
    
    



