import React from 'react';
import './StartButton.css';
import { useSelector, useDispatch } from 'react-redux';
import { SET_STARTED, SET_VICTORY } from '../../actions/types';

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
  }

  return (
    <div className="StartButtonContainer">
      <div className={btnClass}
        onClick={handleClick}
      >new</div>
    </div>
  )
}