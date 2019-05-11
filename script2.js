let card = document.getElementsByClassName("card");
let cardz = [...card];
let cardsMatched = document.getElementsByClassName("match");

const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));

console.log(cardz);

const deck = document.getElementById("card-deck"); 

let selectedCards = [];



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
    selectedCards=[]; // open cards array

    cardz = shuffle(cardz);

    for (let i =0; i< 12; i++){
        deck.innerHTML ="";
        [].forEach.call(cardz,function(item) {
            deck.appendChild(item);
            
        });
    //    cardz[i].classList.remove("flip");
       carz[i].classList.remove("show","open","disable");
        }
    }
    function display(){
        this.class.toggle("open");
        this.class.toggle("show");
        this.class.toggle("disable");
    }

    function openCardsMatch(){
        selectedCards.push(this);
        let move = selectedCards.length;
        if(move === 2){
            countMove();
            if(selectedCards[0].value === selectedCards[1].value){
            cardMatched();
        }else{
            notMatch();
        }
    }

function cardMatched(){
    selectedCards[0].classList.add("match","disable");
    selectedCards[1].classList.add("match","disable");
    selectedCards[0].classList.add("show","open","no-event");
    selectedCards[1].classList.add("show","open","no-event");
    selectedCards=[];
}
function notMatch(){
    selectedCards[0].classList.add("nomatch");
    selectedCards[1].classList.add("nomatch");
    disable();
    selectedCards[0].classList.remove("show", "open", "no-event","unmatched");
    selectedCards[1].classList.remove("show", "open", "no-event","unmatched");
    enable();
}
function disable(){
    Array.prototype.filter.call(cards, function(cardz){
        cardz.classList.add('disabled');
    });
}
for (var i = 0; i < cardz.length; i++){
    cardz = card[i];
    cardz.addEventListener("click", display);
    cardz.addEventListener("click", openCardMatch);
    
};
}