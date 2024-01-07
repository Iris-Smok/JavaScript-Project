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
    firstCard = this.innerHTML
   }else{
    hasFlippedCard = false
    secondCard = this.innerHTML
   }
   matchingCards()
}


function matchingCards(){
    if (firstCard === secondCard){
        console.log('win')
    }
}