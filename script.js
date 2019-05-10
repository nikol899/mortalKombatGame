"use strict";
let roundNumber =1;
let flippedCards=[]; // keep track of flipped cards in the array
let count =0; // keeps count of cards total of 12 in a deck
let cardsArray=[];

const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

function setRoundNumber() {
    document.querySelector(".startBtn").innerText=`Round : ${roundNumber}`;
}

function addsEventsElements(){
    document.querySelector("main").addEventListener("click",function(event){
        if(event.target.classList.contains("startBtn")){
            startGame();
            console.log(event);
        }else if(event.target.classList.contains("resetBtn"));{
            // resets the board and shuffle cards
        }
    }
    )};
function cardShuffle(){
    var currentIndex = cardsArray.length, tempCards, randomCards;
    while (currentIndex !== 0) {
        randomCards = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempCards = cardsArray[currentIndex];
        cardsArray[currentIndex] = cardsArray[randomCards];
        cardsArray[randomCards] = tempCards;
    }

    return  cardsArray;
};

    function startGame(){
    cardArray.sort(() => 0.5 - Math.random()); // shuffles the cards
        if(firstChildElement[0].value === cardsArray.firstChildElement[1].value){
            

        }
    }