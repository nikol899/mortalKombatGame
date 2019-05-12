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

<<<<<<< HEAD
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
function cardShuffle(array){
    let currentIndex = cardsArray.length, tempCards, randomCards;
    while (currentIndex !== 0) {
        randomCards = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempCards = cardsArray[currentIndex];
        cardsArray[currentIndex] = cardsArray[randomCards];
        cardsArray[randomCards] = tempCards;
    }

    return  array;
};

    function startGame(){
        cardShuffle();
        if(firstChildElement[0].value === cardsArray.firstChildElement[1].value){
            

        }
    }
    
let card = document.getElementsByIdName("");
=======
let card = document.getElementsByClassName("card");
>>>>>>> workingonmatch
	const arrayCards = [...card];
	for( let i =0;i<cards.length; i++){
	 
    }
<<<<<<< HEAD
=======
// deck of all cards
const deck = document.getElementById("card-deck");
// counts # of moves
let moves =0;
counter=document.querySelector(".moves");

let matchedCards=document.getElementsByClassName("match");

document.body.onload = startGame();

function startGame(){
    
}
// if(count < 2){
//     count ++;
//     event.target.classList.add("flippedCards");
// }


// function matchedCards(){
//     let flippedCards = document.querySelectorAll(".card")
//     flippedCards.forEach(card =>{
//         card.classList.add("match")
//     })
// }

// function resetGuess(){
//     guessOne ="";
//     guessTwo="";
//     count =0;
//     flippedCards.forEach(function(card){
//         card.classList.remove(flippedCards);
//     });
// }

// cards.addEventListener("click",function(event){
//     if(count <2){
//         count ++;
//         if(count === 1){
//             guessOne = event.target.tagName.value
//             console.log(event);
//             event.target.classList.add(".card")
//         }else{
//             guessTwo = event.target.tagName.value
//             event.target.add(".card")
//         }

//     if(guessOne && guessTwo ){
//         if(guessOne === guessTwo){
//             matchedCards();
//             resetGuess();
//         }
//     }
// } previousChoice=event.target;

// })
>>>>>>> workingonmatch
