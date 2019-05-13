let card = document.getElementsByClassName("card");
let cardz = [...card];
let cardsMatched = document.getElementsByClassName("match");
let cardsUnmactch = document.getElementsByClassName("unmatch");
const deck = document.getElementById("card-deck");
const cards = document.querySelectorAll('.card');
let hasFlipped = false;
let guessOne,guessTwo;

let selectedCards = [];
let lock = false; // locks board prevents cards from flipping before are match or hidden

// document.querySelector("main").addEventListener("click",function(event){
//     if(event.target.classList.contains("startBtn")){
//         startGame();
//     }else{
//         if(event.target.classList.contains("resetBtn")){
//             resetBoard();
//         }
//     }
// });



function startGame() {
    selectedCards = []; // open cards array

    cardz = shuffle(cardz);

    for (let i = 0; i < 12; i++) {
        deck.innerHTML = "";
        [].forEach.call(cardz, function (item) {
            deck.appendChild(item);

        });
        cardz[i].classList.remove("flip", "match");
    }
}

    function flipCard() {
        if (lock) return;
        if (this === guessOne) 
        return;

        this.classList.add('flip');

        if (!hasFlipped) {
            hasFlipped = true;
            guessOne = this;
            return;
        }
        guessTwo = this;
       

        matchCheck();
    }
  
    function matchCheck() {
        if (guessOne.dataset.framework === guessTwo.dataset.framework) {
            // this.classList.push(selectedCards);
            // console.log(selectedCards);
            matched();
            return;
        } else {
            unmatched();
        }
    }

    function matched() {
        guessOne.removeEventListener("click", flipCard);
        guessTwo.removeEventListener("click", flipCard);

        resetGame();
    }
    function unmatched() {
        setTimeout(() => {
            guessOne.classList.remove("flip","unmatch");
            guessTwo.classList.remove("flip","unmatch");
             resetGame();
        }, 1000);
    }
    function resetGame() {
        hasFlipped = false;
        lock = false;
        guessOne = null
        guessTwo = null
    }
   
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    cards.forEach(card => card.addEventListener('click', flipCard));

    console.log(cardz);

// startGame();
