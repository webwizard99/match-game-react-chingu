import React from 'react';
import './MenuBar.css'
import { useSelector } from 'react-redux'

import StartButton from '../StartButton/StartButton';
import StarContainer from '../StarContainer/StarContainer';
import TurnsContainer from '../TurnsContainer/TurnsContainer';

export default function MenuBar(props) {
  const started = useSelector(state => state.app.started);
  

  
  return (
    <div className="MenuBar">
      {started ? <TurnsContainer /> : ''}
      {started ? <StarContainer /> : ''}
      <StartButton />
    </div>
  )
}