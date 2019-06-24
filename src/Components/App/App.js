import React from 'react';
import './App.css';

// component imports
import MenuBar from '../MenuBar/MenuBar';
import GameContainer from '../GameContainer/GameContainer';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { SET_DECK } from '../../actions/types';

import cardManager from '../../Utilities/cardManager';



export default function App(props) {
  
  const dispatch = useDispatch();

  if (cardManager.getCards() < 1) {
    cardManager.init();
    dispatch({ type: SET_DECK, deck: cardManager.getCards() })
  }

  
  
  return (
    <div className="App">
      <div className="MainContainer">
        <MenuBar />
        <GameContainer />
      </div>
    </div>
  )

}
