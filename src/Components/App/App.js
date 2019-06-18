import React from 'react';
import './App.css';
import MenuBar from '../MenuBar/MenuBar';
import GameContainer from '../GameContainer/GameContainer';


import cardManager from '../../Utilities/cardManager';



export default function App(props) {
  
  const deck = cardManager.getCards();
  if (deck.length < 1) {
    cardManager.init();
  }
  
  return (
    <div className="App">
      <div className="MainContainer">
        <MenuBar />
        <GameContainer deck={deck} />
      </div>
    </div>
  )

}
