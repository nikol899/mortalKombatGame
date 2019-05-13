let card = document.getElementsByClassName("card");
let cardz = [...card];
let cardsMatched = document.getElementsByClassName("match");
let setTimeOut = 0;
const deck = document.getElementById("card-deck");
const cards = document.querySelectorAll('.card');
let hasFlipped = false;
let guessOne, guessTwo;
let selectedCards = [];
let lock = false; // locks board prevents cards from flipping before are match or hidden


document.querySelector("main").addEventListener("click",function(event){
    if(event.target.classList.contains("startBtn")){
        console.log(event);
        startGame();
    }else{
        if(event.target.classList.contains("resetBtn")){
            resetBoard();
        }
    }
});

let interval;
let timer = document.querySelector(".timer");
timer.innerText = "0 mins 0 secs";
clearInterval(interval);

let seconds = 0;
let minutes =0;
// const timer = document.querySelector(`.timer`);

function startTimer(){
     interval = setInterval(function(){
        timer.innerHTML = minutes+ "mins" + seconds + "sec";
        seconds ++;
        if(seconds == 60){
            minutes ++ ;
            seconds = 0;
        }
        if(minutes == 600)
        minutes =0 ;
    },1500);
} 

function startGame() {
    selectedCards = []; // open cards array

    cardz = shuffle(cardz);

    for (let i = 0; i < 12; i++) {
        deck.innerHTML = "";
        [].forEach.call(cardz, function (item) {
            deck.appendChild(item);

        });
        cardz[i].classList.remove("flip");

    }

    function flipCard() {
        
        if (lock) return;
        if (this === guessOne) 
        return;
        startTimer();
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
      setInterval(() => {
            guessOne.classList.remove("flip");
            guessTwo.classList.remove("flip");
            return;
        }, 2000);
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




