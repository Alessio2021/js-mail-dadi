// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const container = document.querySelector('.container')
const div = document.createElement('div')
const listEmail = ["alessio.butera@gmail.com", "alessiobutera@gmail.com", "ale.butera@gmail.com", "alessiobut1911@gmail.com"]

const button = document.getElementById('btn')
button.addEventListener("click", function() {
    const email = document.getElementById('email').value;
    console.log(email);
    
    for (let i = 0; i < listEmail.length; i++) {
        
        if (email == listEmail[i]) {
            container.append(div)
            div.innerHTML = "la tua email e' nella lista"
        } else {
            container.append(div)
            div.innerHTML = "la tua email non e' nella lista"
        }
    }
});

