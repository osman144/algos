let suit = ['Heart', 'Club', 'Spade', 'Diamond']

class Card{
  constructor(value, suit){
    this.value = value;
    this.suit = suit
  };
}

class Deck{
  constructor(cardList, length){
    this.cardList = [];
    this.length = 0;
  }

  addCard(card){
    let newCard = {
      card: card
    };

    this.cardList.push(newCard);
    this.length++;
  }

  // addMultiple(){
  //   let heart = {};
  //   let club = {};
  //   let spade = {};
  //   let diamond = {};

  //   for(){
      
  //   }
  // }

  print(){
    return this.cardList;
  }
}


let myCards = new Deck();

let card = new Card('10', suit[0]);

myCards.addCard(card);

console.log(myCards.cardList);