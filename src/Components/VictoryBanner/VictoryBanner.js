import React from 'react';
import './VictoryBanner.css';

// redux imports
import { useDispatch } from 'react-redux';
import { SET_VICTORY, SET_STARTED } from '../../actions/types';

export default function VictoryBanner(props) {
  const dispatch = useDispatch();

  const handleClose = function() {
    dispatch({ type: SET_STARTED, value: false });
    dispatch({ type: SET_VICTORY, value: false });
  }


  return (
    <div className="VictoryContainer"
      onClick={handleClose}>
      <div className="VictoryBanner">
        You Win!!
      </div>
    </div>
  )
}