let message = document.getElementById("subHeading");

let cards = document.getElementById("card");

let add = document.getElementById("sum");

let cardOne = random();
let cardTwo = random();
let cardsArray = [cardOne, cardTwo]
let sumOfCards =  cardOne + cardTwo;
let hasBlackJack = false;
let isAlive = true;

console.log(message);
console.log(cards);
console.log(add);
console.log(sum);

// main function for both start game and new card
function start(){
     renderGame()
}

// function to check the statement and the sum to conculde the result
function renderGame(){
    
    let messageContent;

    if(sumOfCards <= 20){
        console.log("do you want to draw another card?");
        messageContent = "Do you want to draw another card?";
    }
    else if(sumOfCards === 21){
        console.log("congrats you've got a blackjack");
        messageContent = "Congrats you have got a black jack";
        hasBlackJack = true;
    }
    else{
        console.log("better luck next time");
        messageContent = "Better Luck Next Time";
        isAlive = false;
    }
    
    subHeading.innerText = messageContent;

    cards.innerText = "CARDS : ";

    for(let i=0; i<cardsArray.length; i++){
        cards.innerText +=  " " + cardsArray[i] + " "; 
    }
    sum.innerText = "SUM : " + sumOfCards; 
}

// function to get a new number when new card is clicked
function newCard(){
    let anotherCard = random();
    sumOfCards += anotherCard;
    cardsArray.push(anotherCard);
    renderGame();
}

// function to generate random number
function random(){
    let randomNumber = Math.floor( Math.random()*6 ) + 1;
    return randomNumber;
}
