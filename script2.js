let card = document.getElementsByClassName("card");
let cardz = [...card];


const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

console.log(cardz);

const deck = document.getElementById("card-deck");

// let selectedCards = [];

function shuffle(array) {


    let currentIndex = array.length, temporaryValue, randomIndex;

    while(currentIndex !==0){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
document.body.onload = startGame();

function startGame(){

    cardz = shuffle(cardz);

    for (let i =0; i< 12; i++){
        deck.innerHTML ="";
        [].forEach.call(cardz,function(item) {
            deck.appendChild(item);
            
        });
       
        }
    }
