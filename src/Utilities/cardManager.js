const cardManager = (function(){
  const deckSize = 16;

  const deckValues = [
    '&#x2135;',
    '&#x213F;',
    '&#x214A;',
    '&#x2603;',
    '&#x260F;',
    '&#x262E;',
    '&#x262F;',
    '&#x2655;'];
  
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