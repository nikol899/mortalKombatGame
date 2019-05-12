let card = document.getElementsByClassName("card");
let cardz = [...card];
<<<<<<< HEAD
let count = 0; // keeps count of cards total of 12 in a deck
let firstGuess = '';
let secondGuess = '';
let selectedCards = [];
let clicked = selectedCards;

=======
let cardsMatched = document.getElementsByClassName("match");
let setTimeOut = 0;
const deck = document.getElementById("card-deck");
>>>>>>> workingonmatch
const cards = document.querySelectorAll('.card');
let hasFlipped = false;
let guessOne, guessTwo;
let selectedCards = [];
let lock = false; // locks board prevents cards from flipping before are match or hidden

<<<<<<< HEAD
function flipCard() {
    this.classList.toggle('flip');
    
}
=======
>>>>>>> workingonmatch


function startGame() {
    selectedCards = []; // open cards array

    cardz = shuffle(cardz);

<<<<<<< HEAD

=======
    for (let i = 0; i < 12; i++) {
        deck.innerHTML = "";
        [].forEach.call(cardz, function (item) {
            deck.appendChild(item);
>>>>>>> workingonmatch

        });
        cardz[i].classList.remove("flip", "match");

    }

    function flipCard() {
        if (lock) return;
        if (this === guessOne) return;

        this.classList.add('flip');

        if (!hasFlipped) {
            hasFlipped = true;
            guessOne = this;
            return;
        }
        guessTwo = this;
        lock = true;

        matchCheck();
    }
    function matchCheck() {
        if (guessOne.dataset.framework === guessTwo.dataset.framework) {
            disable();
            return;
        }else {
        unflipped();
    }}

    function disable() {
        guessOne.removeEventListener("click", flipCard);
        guessTwo.removeEventListener("click", flipCard);
        resetGame();
    }
    function unflipped() {
       setTimeOut(() => {
            guessOne.classList.remove("flip");
            guessTwo.classList.remove("flip");
            return;
        }, 2000)
    }
    function resetGame() {
        [hasFlipped, lock] = [false, false];
        [guessOne, guessTwo] = [null, null];
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

}
startGame();





<<<<<<< HEAD
    for (let i =0; i< 12; i++){
        deck.innerHTML ="";
        [].forEach.call(cardz,function(item) {
            deck.appendChild(item);
            
        });
        cardz[i].classList.remove("flip", "open", "match", "disabled")
        }
    }


if (count < 2) {
    count++;
    clicked.classList.add('open')
}

const matchedCards = () => {
    let flippedCards = document.querySelectorAll(".selected")
    flippedCards.forEach(card => {
        card.classList.toggle("match")
    })
}

MK_Memory.addEventListener("click", function (event) {
    if (count < 2) {
        count++
        if (count === 1) {
            // Assign first guess
            firstGuess = clicked.dataset.id
            clicked.classList.toggle('selected')
        } else {
            // Assign second guess
            secondGuess = clicked.dataset.id
            clicked.classList.toggle('selected')
        }
        // If both guesses are not empty...
        if (firstGuess !== '' && secondGuess !== '') {
            // and the first guess matches the second match...
            if (firstGuess === secondGuess) {
                // run the match function
                match()
            }
        }
    }
})
//     if (count < 2) {
//         count++;
//         if (count === 1) {
//             guessOne = event.target.value
//             event.target.classList.add("selected")
//         } else {
//             guessTwo = event.target.value
//             event.target.add("selected")
//         }

//         if (guessOne !== "" && guessTwo !== "") {
//             if (guessOne === guessTwo) {
//                 matchedCards();
//             }
//         }
//     } previousChoice = event.target;

// });
// const match = () => {
//     let selected = document.querySelectorAll('.selected')
//     selected.forEach(card => {
//         card.classList.add('match')
//     })
// }
=======
>>>>>>> workingonmatch
