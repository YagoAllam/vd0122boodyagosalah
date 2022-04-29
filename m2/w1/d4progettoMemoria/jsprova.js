let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];



function mix() {
    
    for (let i = 0; i < arrayAnimali.length; i++) {
        let random = Math.round(Math.random()*arrayAnimali.length)
        let temp = arrayAnimali[i]
        arrayAnimali[i] = arrayAnimali[random]
        arrayAnimali[random] = temp
        console.log(arrayAnimali);
    }
    
    }

    mix()