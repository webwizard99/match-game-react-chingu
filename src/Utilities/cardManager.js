const cardManager = (function(){
  const deckSize = 16;

  const deckValues = [
    '&#8501;',
    '&#8511;',
    '&#8522;',
    '&#9731;',
    '&#9743;',
    '&#9774;',
    '&#9775;',
    '&#9813;'];
  
  const Card = function(value, id) {
    this.value = value;
    this.id = id;
    this.turned = false;
    this.matched = false;
  }

  let cards = [];

  const setNewDeck = function() {
    cards = [];

    let unfilteredDeck = [...deckValues];
    unfilteredDeck.push(...deckValues);
    
    let sourceCards = [];

    for (let cardNum = 0; cardNum < deckSize; cardNum++) {
      const newCard = new Card(unfilteredDeck[cardNum], cardNum);
      sourceCards.push(newCard);
    }

    let filteredDeck = [];

    while (sourceCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * sourceCards.length);
      const randomCard = sourceCards.splice(randomIndex, 1);
      filteredDeck.push(randomCard);
    }
    
    cards = filteredDeck;
  }

  return {
    init: function() {
      setNewDeck();
    },

    getCards: function() {
      return cards;
    }

  }

}());

export default cardManager;