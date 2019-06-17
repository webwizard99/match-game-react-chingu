import React from 'react';
import './MenuBar.css'
import { useSelector } from 'react-redux'

import StartButton from '../StartButton/StartButton';

export default function MenuBar(props) {
  const started = useSelector(state => state.app.started);
  

  
  return (
    <div className="MenuBar">
      <StartButton />
    </div>
  )
}