"use strict";
let roundNumber =1;
let flippedCards=[]; // keep track of open cards in the array
let countMove =0; // keeps count of cards total of 12 in a deck


// making div element into an array
let nodes = document.querySelectorAll("div")
const cardsArray = Array.from(nodes); // holds the node list as an array in the cards array

const cards = document.querySelectorAll('.card');
function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));
console.log(cards);


document.querySelector(".startBtn").addEventListener("click",startGame);
document.querySelector("main").addEventListener("click",cardShuffle) ; 

function cardShuffle(array){
    let currentIndex = cardsArray.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    // return array;
  }

const newCards = document.querySelector(".cards") 
function startGame(){
    flippedCards =[];




    cardShuffle();
    let shuffledCards = cardShuffle(newCards);
    for(var i= 0;i<shuffledCards.length; i++ ){
        [].forEach.call(shuffledCards.length,function(item){
            newCards.appendChild(item)
        });
    }
}
startGame(); 
