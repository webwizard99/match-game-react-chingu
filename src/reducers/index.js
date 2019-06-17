import { combineReducers } from 'redux';
import appStateReducer from './appStateReducer';
import gameStateReducer from './gameStateReducer';

export default combineReducers({
  app: appStateReducer,
  game: gameStateReducer
});