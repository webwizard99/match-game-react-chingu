import { SET_STARTED,
  SET_TURNS,
  SET_STARS,
  SET_VICTORY,
  SET_PAUSE } from '../actions/types';

let initialState = {
  started: false,
  turns: 0,
  stars: 0,
  victory: false,
  pause: false
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

    case SET_VICTORY:
      return {
        ...state,
        victory: action.value
      }

    case SET_PAUSE:
      return {
        ...state,
        pause: action.value
      }
      
    default:
      return state;
  }
}