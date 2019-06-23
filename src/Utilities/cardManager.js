import React from 'react';

const cardManager = (function(){
  const deckSize = 16;

  const deckValues = [
    <span>&#8501;</span>,
    <span>&#8511;</span>,
    <span>&#8522;</span>,
    <span>&#9731;</span>,
    <span>&#9743;</span>,
    <span>&#9774;</span>,
    <span>&#9775;</span>,
    <span>&#9813;</span>];
  
  const Card = function(value, id) {
    this.value = value;
    this.id = id;
    this.flipped = false;
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
    }

  }

}());

export default cardManager;