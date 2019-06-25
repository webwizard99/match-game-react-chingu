import { SET_FLIPPED,
  SET_MATCHED, 
  SET_DECK,
  SET_CARD_FLIPPED } from '../actions/types';

let initialState = {
  flipped: false,
  matched: [],
  deck: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_FLIPPED:
      return {
        ...state,
        flipped: action.value
      }

    case SET_MATCHED:
      let newMatched = state.matched;
      newMatched.push(action.matched)
      return {
        ...state,
        matched: newMatched
      }

    
    case SET_DECK:
      let newDeck = JSON.parse(JSON.stringify(action.deck));
      return {
        ...state,
        deck: newDeck
      }

    case SET_CARD_FLIPPED:
        let newFlipDeck = JSON.parse(JSON.stringify(state.deck));
        let cardChanging = state.deck.find(card => card.id === action.card);
        let cardIndex = state.deck.indexOf(cardChanging);
        newFlipDeck[cardIndex].flipped = action.value;

        return {
          ...state,
          deck: newFlipDeck
        }

    default:
      return state;
  }
}