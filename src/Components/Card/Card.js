import React from 'react';
import './Card.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Card(props) {
  const flipped = useSelector(state => state.game.flipped);
  const started = useSelector(state => state.app.started);
  const dispatch = useDispatch();

  let cardClass = started ? "Card" : "Card inactive-card";
  
  if (props.card.flipped) {
    cardClass = "Card flipped-card";
  }


  const handleClick = function() {
    console.log(props.card);
    props.card.flipped = true;
  }

  return (
    <div className={cardClass}
      onClick={handleClick}
    >
    
    </div>
  )
}