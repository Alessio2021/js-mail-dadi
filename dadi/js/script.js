// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const container = document.querySelector(".container")
const numbers = document.querySelector(".numbers")
const winner = document.querySelector(".winner")

let randNumbUser = Math.floor(Math.random() * 6) + 1;
let randNumbPc = Math.floor(Math.random() * 6) + 1;

const div = document.createElement('div')

numbers.innerHTML = `Utente ` + randNumbUser + ' - ' + `Computer ` + randNumbPc

if (randNumbUser > randNumbPc) {
    winner.append(div)
    div.append(`Il vincitore e' l'Utente`)
} else if (randNumbPc > randNumbUser) {
    winner.append(div)
    div.append(`Il vincitore e' il Computer`)
} else {
    winner.append(div)
    div.append(`Parita'`)
}