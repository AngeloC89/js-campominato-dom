/* Consegna

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
* */


const button = document.querySelector('.btn.btn-primary')
const container = document.querySelector('.container');
let levelChoice = document.getElementById('level');
button.addEventListener('click', function () {
    // console.log('il tasto funziona');
    container.innerHTML = '';
    choice = parseInt(levelChoice.value);
    // console.log(choice);


    for (let i = 1; i <= 1; i++) {
        const tmpHtml = NewSquare(i, choice, 'id', 'square');
        const tmpHtmlBomb = NewSquareBomb(tmpHtml, 16, choice, 'id', 'bomb');
        // console.log(tmpHtml[i]);
        // console.log(tmpHtmlBomb[i]);




        // console.log(typeof tmpHtml)
        // console.log(Array.isArray(tmpHtml));











        tmpHtmlBomb.forEach(element => {
            container.appendChild(element);
        })
    }
});




/** ****************************** Funzioni *************************************/
function NewSquare(content, numSquare, type, idClass) {
    const squares = [];
    for (i = 1; i <= numSquare - 16; i++) {
        let newSquare = document.createElement('span');
        newSquare.innerHTML += getRndInteger(1,choice);
        newSquare.setAttribute(`${type}`, `${idClass}`);//ho modificato la funzione in modo da poter usare una qualsiasi classe o id senza dover compromettere la sua indipendenza dalla classe/id stessa
        squareWidth = `calc(100% / ${Math.sqrt(numSquare)} - 10px)`;
        newSquare.style.width = squareWidth;
        squares.push(newSquare)

    }

    return squares;
}
function NewSquareBomb(list, numSquare, choice, type, idClass) {
    let isFound = false;
    const squaresBomb = [];
    for (i = 1; i <= numSquare; i++) {
        let newSquare = document.createElement('span');
        newSquare.innerHTML = getRndInteger(1, choice);
        while (!isFound) {
            randomInt = getRndInteger(1, 100);
            if (!list.includes(squaresBomb)) {
                isFound = true;
            }
        }
        newSquare.setAttribute(`${type}`, `${idClass}`);
        squareWidth = `calc(100% / ${Math.sqrt(choice)} - 10px)`;
        newSquare.style.width = squareWidth;
        squaresBomb.push(newSquare)

    }

    return squaresBomb;
}





