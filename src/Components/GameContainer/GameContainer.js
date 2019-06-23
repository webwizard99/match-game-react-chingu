import React from 'react';
import Card from '../Card/Card';
import './GameContainer.css';

export default function GameContainer(props) {
  const getCards = function() {
    const deck = props.deck;

    return deck.map((card, cardN) => {
      return (
        <Card key={cardN}
          card={card}
        />
      )
    })
  }
  
  return <div className="GameContainer">
    {getCards()}
  </div>
}