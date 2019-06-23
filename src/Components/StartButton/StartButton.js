import React from 'react';
import './StartButton.css';
import { useSelector, useDispatch } from 'react-redux';
import { SET_STARTED } from '../../actions/types';

export default function StartButton(props) {
  const started = useSelector(state => state.app.started);
  const dispatch = useDispatch();

  let btnClass = '';
  if (started) {
    btnClass = 'StartButton inactive';
  } else {
    btnClass = 'StartButton';
  }

  return (
    <div className="StartButtonContainer">
      <div className={btnClass}
        onClick={() => dispatch({ type: SET_STARTED, value: true })}
      >new</div>
    </div>
  )
}