import React from 'react';
import './TurnsContainer.css';
import { useSelector, useDispatch } from 'react-redux';

export default function TurnsContainer(props) {
  const turns = useSelector(state => state.app.turns);

  return (
    <div className="TurnsContainer">
      <p className="TurnsLabel">Turns: </p>
      <span className="Turns">{turns}</span>
    </div>
  )
}