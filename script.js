"use strict";


let roundNumber =1;
let flippedCards=[]; // keep track of flipped cards in the array
let count =0; // keeps count of cards total of 12 in a deck
let cardsArray=[];
let guessOne="";
let guessTwo="";
let previousChoice = null;


const cards = document.querySelectorAll('.card');

// flip event
function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

function setRoundNumber() {
    document.querySelector(".startBtn").innerText=`Round : ${roundNumber}`;
}

let card = document.getElementsByClassName("card");
	const arrayCards = [...card];
	for( let i =0;i<cards.length; i++){
	 
    }

if(count < 2){
    count ++;
    event.target.classList.add("flippedCards");
}

function matchedCards(){
    let flippedCards = document.querySelectorAll(".card")
    flippedCards.forEach(card =>{
        card.classList.add("match")
    })
}

MK_Memory.addEventListener("click",function(event){
    if(count <2){
        count ++;
        if(count === 1){
            guessOne = event.target.value
            event.target.classList.add("selected")
        }else{
            guessTwo = event.target.value
            event.target.add("selected")
        }

    if(guessOne !== "" && guessTwo !== ""){
        if(guessOne === guessTwo){
            matchedCards();
        }
    }
} previousChoice=event.target;

})
