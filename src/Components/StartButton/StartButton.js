import React from 'react';
import './StartButton.css';
import { useSelector, useDispatch } from 'react-redux';

export default function StartButton(props) {
  const started = useSelector(state => state.app.started);

  let btnClass = '';
  if (started) {
    btnClass = 'StartButton inactive';
  } else {
    btnClass = 'StartButton';
  }

  return (
    <div className="StartButtonContainer">
      <div className={btnClass}>new</div>
    </div>
  )
}