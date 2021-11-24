// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const container = document.querySelector(".container");
const numbers = document.querySelector(".numbers");
const winner = document.querySelector(".winner");
const button = document.getElementById("button");
let randNumbUser;
let randNumbPc;

button.addEventListener("click", function() {
    randNumbUser = Math.floor(Math.random() * 6 + 1);
    randNumbPc = Math.floor(Math.random() * 6 + 1);
    numbers.innerHTML = `Utente ` + randNumbUser + ' - ' + `Computer ` + randNumbPc;
    
    if (randNumbUser > randNumbPc) {
        winner.innerHTML = "il vincitore e' l Utente"
    } else if (randNumbPc > randNumbUser) {
        winner.innerHTML = "il vincitore e' il Computer"
    } else {
        winner.innerHTML = "Parita'";
    }
});

    