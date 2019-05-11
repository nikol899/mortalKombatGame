"use strict";
let roundNumber =1;
let flippedCards=[]; // keep track of flipped cards in the array
let count =0; // keeps count of cards total of 12 in a deck
let startBtn =document.getElementByclass("startBtn");
let resetBtn =document.getElementByclass("resetBtn");
let sec =0;
let min =0;
let timer =document.querySelector("timer");
let interval =undefined;

let cards = document.querySelectorAll('.card');
function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

// let startBtn = document.getElementsByClassName("startBtn");

function setRoundNumber() {
    document.querySelector(".startBtn").innerText=`Round : ${roundNumber}`;
}
function countDown(){
  

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
    function startGame(){
    cardArray.sort(() => 0.5 - Math.random()) // shuffles the cards
    document.getElementById("timer").innerHTML = 90;
    countDown();

    }

function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML =`minute ${mins} second ${secs}`;
        second++;
        if(second < 90){
            
        }
    }
}
