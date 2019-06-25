import React from 'react';
import './Card.css';
import cardManager from '../../Utilities/cardManager';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { SET_CARD_FLIPPED, SET_FLIPPED } from '../../actions/types';

export default function Card(props) {
  const flipped = useSelector(state => state.game.flipped);
  const started = useSelector(state => state.app.started);
  const paused = useSelector(state => state.app.pause);
  const dispatch = useDispatch();

  let cardClass = started ? "Card" : "Card inactive-card";
  
  

  const handleClick = function() {
    if (!flipped && paused) return;
    if (!started || flipped === props.card.id || props.card.flipped || paused) return;
    dispatch({ type: SET_CARD_FLIPPED, card: props.card.id, value: true });
    cardClass="Card flipped-card";
    if (!!flipped) {
      props.checkMatch(props.card.id);
    } else {
      dispatch({ type: SET_FLIPPED, value: props.card.id });
    }
    
  }

  if (props.card.flipped) {
    cardClass = "Card flipped-card";

  }

  return (
    <div className={props.card.flipped ? "Card flipped-card" : cardClass}
      onClick={handleClick}
    >
      {props.card.flipped ? cardManager.getCardFace(props.card.value) : ''}
    </div>
  )
}