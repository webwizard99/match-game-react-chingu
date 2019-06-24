import React from 'react';

const cardManager = (function(){
  const deckSize = 16;

  const deckValues = [
    <span className="cardValue">&#8501;</span>,
    <span className="cardValue">&#8511;</span>,
    <span className="cardValue">&#8522;</span>,
    <span className="cardValue">&#9731;</span>,
    <span className="cardValue">&#9743;</span>,
    <span className="cardValue">&#9774;</span>,
    <span className="cardValue">&#9775;</span>,
    <span className="cardValue">&#9813;</span>];
  
  const Card = function(value, id) {
    this.value = value;
    this.id = id;
    this.flipped = false;
    this.matched = false;
  }

  let cards = [];

  const setNewDeck = function() {
    cards = [];

    let unfilteredDeck = [];
    for (let cardValue = 0; cardValue < deckSize /2; cardValue++) {
      unfilteredDeck.push(cardValue);
      unfilteredDeck.push(cardValue);
    }
    
    let sourceCards = [];

    for (let cardNum = 0; cardNum < deckSize; cardNum++) {
      const newCard = new Card(unfilteredDeck[cardNum], cardNum);
      sourceCards.push(newCard);
    }

    let filteredDeck = [];

    while (sourceCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * sourceCards.length);
      const randomCard = sourceCards.splice(randomIndex, 1);
      filteredDeck.push(...randomCard);
    }
    
    cards = filteredDeck;
  }

  return {
    init: function() {
      setNewDeck();
    },

    getCards: function() {
      return cards;
    },

    getCard(value) {
      return deckValues[value];
    }

  }

}());

export default cardManager;