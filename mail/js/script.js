
const opacity = document.querySelector('.opacity');
const div = document.createElement('div');
const listEmail = ["alessio.butera@gmail.com", "alessiobutera@gmail.com", "ale.butera@gmail.com", "alessiobut1911@gmail.com"];

// Chiedi all’utente la sua email, 
const button = document.getElementById('btn');
button.addEventListener("click", function() {
    const email = document.getElementById('email').value;
    document.getElementById('email').value = '';

    let find = false;

    for (let i = 0; i < listEmail.length; i++) {
        const element = listEmail[i]
        
        if (email.toLowerCase() == element.toLowerCase()) {
            find = true
        }
    }
    if (find == true) {
        opacity.append(div)
        div.innerHTML = "la tua email e' nella lista"
    } else {
        opacity.append(div)
        div.innerHTML = "la tua email non e' nella lista"
    }
})
