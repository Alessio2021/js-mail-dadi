
const opacity = document.querySelector('.opacity');
const div = document.createElement('div');
const listEmail = ["alessio.butera@gmail.com", "alessiobutera@gmail.com", "ale.butera@gmail.com", "alessiobut1911@gmail.com"];

// Chiedi all’utente la sua email, 
const button = document.getElementById('btn');
button.addEventListener("click", function() {
    const email = document.getElementById('email').value;
    document.getElementById('email').value = '';
    
    for (let i = 0; i < listEmail.length; i++) {
        // controlla che sia nella lista di chi può accedere,
        // stampa un messaggio appropriato sull’esito del controllo.
        if (email == listEmail[i]) {
            opacity.append(div)
            div.innerHTML = "la tua email e' nella lista"
        } else {
            opacity.append(div)
            div.innerHTML = "la tua email non e' nella lista"
        };
    };
});

