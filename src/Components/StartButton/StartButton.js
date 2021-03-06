import React from 'react';
import './StartButton.css';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { SET_STARTED,
  SET_TURNS,
  SET_VICTORY, 
  SET_DECK,
  SET_STARS } from '../../actions/types';

import cardManager from '../../Utilities/cardManager';

export default function StartButton(props) {
  const started = useSelector(state => state.app.started);
  const victory = useSelector(state => state.app.victory);
  const dispatch = useDispatch();

  let btnClass = '';
  if (started && !victory) {
    btnClass = 'StartButton inactive';
  } else {
    btnClass = 'StartButton';
  }

  const handleClick = function() {
    if (started && !victory) {
      return;
    }
    dispatch({ type: SET_STARTED, value: true })
    dispatch({ type: SET_VICTORY, value: false });
    dispatch({ type: SET_TURNS, turns: 1 });
    dispatch({ type: SET_STARS, stars: 0})
    cardManager.init();
    dispatch({ type: SET_DECK, deck: cardManager.getCards() })
  }

  return (
    <div className="StartButtonContainer">
      <div className={btnClass}
        onClick={handleClick}
      >new</div>
    </div>
  )
}