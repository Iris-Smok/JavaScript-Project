let cards = document.getElementsByClassName('card')
let firstCard;
let secondCard;
let hasFlippedCard = false;

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard);
}

function flipCard(){
    this.classList.add('color')
   if(this === firstCard) return;

   if(!hasFlippedCard){
    hasFlippedCard = true
    firstCard = this;
   }else{
    hasFlippedCard = false
    secondCard = this;
   }
   matchingCards()
}


function matchingCards(){
    if (firstCard.innerHTML === secondCard.innerHTML){
       firstCard.classList.add('green')
       secondCard.classList.add('green')
    }
    else{
        firstCard.classList.remove('color');
        secondCard.classList.remove('color')
    }
}