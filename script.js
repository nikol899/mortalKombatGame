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


let card = document.getElementsByClassName("card");
	const arrayCards = [...card];
	for( let i =0;i<cards.length; i++){
	 
    }
