import React from 'react';
import Card from '../Card/Card';
import './GameContainer.css';

import { useSelector } from 'react-redux';

export default function GameContainer(props) {
  const deckState = useSelector(state => state.game.deck);
  
  const getCards = function() {
    const deck = deckState;

    return deck.map((card, cardN) => {
      return (
        <Card key={cardN}
          card={card}
          flipCard={props.flipCard}
        />
      )
    })
  }
  
  return <div className="GameContainer">
    {getCards()}
  </div>
}