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
let display = document.querySelector('score')
let score = 0;

button.addEventListener('click', function () {
    document.getElementById('score').innerHTML = 'Score ' + (score = 0);
    // console.log('il tasto funziona');
    container.innerHTML = '';
    choice = parseInt(levelChoice.value);
    // console.log(choice);
    const bombs = NewSquareBomb(choice);
    console.log(bombs);
    let found = false;
    for (let i = 1; i <= choice; i++) {

        const tmpHtml = NewSquare(i, choice, 'id', 'square');

        container.appendChild(tmpHtml);

        if(bombs.includes(i)){
            tmpHtml.classList.add('is-bomb')
        };
        tmpHtml.addEventListener('click', function () {
            if (!tmpHtml.clicked) {

                if (!found) {

                    if (bombs.includes(parseInt(tmpHtml.textContent))) {
                        found = true;

                        document.getElementById('score').innerHTML = 'Ops, hai perso!!!';

                        const squares = document.querySelectorAll('.is-bomb');
                        squares.forEach(function (square) {
                            square.classList.add('bomb');
                        });
                    }
                    else {

                        score++
                        tmpHtml.classList.add('safe')
                        console.log(score)
                        document.getElementById('score').innerHTML = 'Score ' + score;
                        if (score === choice - 16) {
                            document.getElementById('score').innerHTML = ' Hai vinto!!! ';
                        }
                        tmpHtml.clicked = true;


                    }
                }
            }
        });
    }
});



/** ****************************** Funzioni *************************************/
function NewSquare(content, numSquare, type, idClass) {
    let newSquare = document.createElement('span');
    newSquare.innerHTML = content;
    newSquare.clicked = false;
    newSquare.setAttribute(`${type}`, `${idClass}`);
    squareWidth = `calc(100% / ${Math.sqrt(numSquare)} - 10px)`;
    newSquare.style.width = squareWidth;
    return newSquare;
}

function NewSquareBomb(max) {
    let found = false;
    const squaresBomb = [];

    while (squaresBomb.length < 16) {
        let currentSquare = getRndInteger(1, max);

        if (!squaresBomb.includes(currentSquare)) {
            squaresBomb.push(currentSquare);
        }
    }

    return squaresBomb;
}
