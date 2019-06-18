import React from 'react';
import './Card.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Card(props) {
  const flipped = useSelector(state => state.game.flipped);
  const started = useSelector(state => state.app.started);

  const cardClass = started ? "Card" : "Card inactive-card";

  const handleClick = function() {

  }

  return (
    <div className={cardClass}
      onClick={handleClick}
    >
    
    </div>
  )
}