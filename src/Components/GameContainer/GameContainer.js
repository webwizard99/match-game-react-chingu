import React from 'react';
import Card from '../Card/Card';
import './GameContainer.css';

import constants from '../../Utilities/constants';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { SET_FLIPPED, 
  SET_CARD_FLIPPED,
  SET_STARS ,
  SET_TURNS,
  SET_MATCHED,
  SET_VICTORY,
  SET_PAUSE } from '../../actions/types';

export default function GameContainer(props) {
  const deckState = useSelector(state => state.game.deck);
  const flipped = useSelector(state => state.game.flipped);
  const stars = useSelector(state => state.app.stars);
  const turns = useSelector(state => state.app.turns);
  const matched = useSelector(state => state.game.matched);

  const dispatch = useDispatch();

  const checkMatch = function(id) {
    if (!flipped) return false;
    
    const card1ID = deckState.find(card => card.id === flipped).id;
    const card1Value = deckState.find(card => card.id === flipped).value;
    const card2ID = deckState.find(card => card.id === id).id;
    const card2Value = deckState.find(card => card.id === id).value;


    if (!(card1Value === card2Value)) {
      dispatch({ type: SET_PAUSE, value: true });
      
      window.setTimeout(function() {
        dispatch({ type: SET_FLIPPED, value: false });
        dispatch({ type: SET_CARD_FLIPPED, card: card1ID, value: false});
        dispatch({ type: SET_CARD_FLIPPED, card: card2ID, value: false});
        
        if (stars > 0) {
          const newStars = stars - 1;
          dispatch({ type: SET_STARS, stars: newStars });
        }
        const newTurns = turns + 1;
        dispatch({ type: SET_TURNS, turns: newTurns});
        dispatch({ type: SET_PAUSE, value: false });
        
      }, constants.getMatchDelay()); 

      
    } else {
      dispatch({ type: SET_FLIPPED, value: false });
      
      if (stars < 3) {
        const newStars = stars + 1;
        dispatch({ type: SET_STARS, stars: newStars });
      }

      dispatch({ type: SET_MATCHED, matched: card1ID });
      dispatch({ type: SET_MATCHED, matched: card2ID });

      if (matched.length === deckState.length) {
        dispatch({ type: SET_VICTORY, value: true });
      }

      const newTurns = turns + 1;
      dispatch({ type: SET_TURNS, turns: newTurns});
      
    }
  }

  
  const getCards = function() {
    const deck = deckState;

    return deck.map((card, cardN) => {
      return (
        <Card key={cardN}
          card={card}
          checkMatch={checkMatch}
        />
      )
    })
  }
  
  return <div className="GameContainer">
    {getCards()}
  </div>
}