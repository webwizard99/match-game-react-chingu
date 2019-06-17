import { SET_STARTED, SET_TURNS, SET_STARS } from '../Actions/types';

let initialState = {
  started: false,
  turns: 0,
  stars: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_STARTED:
      return {
        ...state,
        started: action.value
      }
    
    case SET_TURNS:
      return {
        ...state,
        turns: action.turns
      }
    case SET_STARS:
      return {
        ...state,
        stars: action.stars
      }
    default:
      return state;
  }
}