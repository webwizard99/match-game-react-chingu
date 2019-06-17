import { SET_FLIPPED, SET_MATCHED } from '../actions/types';

let initialState = {
  flipped: false,
  matched: []
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
      newMatched.push(...action.matched)
      return {
        ...state,
        matched: newMatched
      }
      
    default:
      return state;
  }
}