"use strict";
let deckCards=[
    {name:"Jade", img:"MK-headShots\Jade_MK11_Pose.png"},
    {name:"Kitana",img:"MK-headShots\Kitana_mk11.octet-stream.png"},
    {name:"Sindel",img:"MK-headShots\Sindelrenderbywildboyz4.png"},
    {name:"Sonya", img:"MK-headShots\Sonya.jpeg"}
];
let tempValue=[]; 
let cardsFlipped=0; // how many cards have been flipped
let memoryCardsId=[]; // cards that have been flipped

function cardMatch(){
    if(memoryValues[0] === memoryValues[1]){
        cardsFlipped +=2; //
        memoryValues=[];
        memoryCardsId=[];
        if(cardsFlipped === deckCards.length){ // if all cards on the board have matched matched clears the board
            document.getElementsByClassName("deckCards").innerHTML="";
        }
    }

function cardShuffle(){
 let currentIndex = deckCards.length;
 while(curentIndex !== 0){
     randomIndex = Math.floor(Math.random()*currentIndex);
 }
}
   
  



// let flippedCard =false;
// const deckCards=[
//     {name:"Jade", img:"MK-headShots\Jade_MK11_Pose.png"},
//     {name:"Kitana",img:"MK-headShots\Kitana_mk11.octet-stream.png"},
//     {name:"Sindel",img:"MK-headShots\Sindelrenderbywildboyz4.png"},
//     {name:"Sonya", img:"MK-headShots\Sonya.jpeg"}
//     // {name:, img}
//     // {name:, img}



// ];

// let card = document.querySelector('.card');
// card.addEventListener('click', function () {
//     card.classList.toggle('is-flipped');
// });

// // random shuffle
// function randomShuffle(){
//     for(let i =0; i < deckCards.length;i++)
    
//     getRandomCard();
// }
// //
// function getRandomCard() {
// [Math.floor(Math.random() * deckCards.length)];
//   }



// // card matching function
// function cardMatching(){
//     const match = document.querySelectorAll(".card");
    
//     if(!flippedCard){
//         flippedCard = true;
//         match.classList.add("is-flipped");
//     }
// }
// // } console.dir(match);
// // match.forEach("card").addEventListener("click",cardMatching)
// console.log();