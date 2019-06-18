import React from 'react';
import './StarContainer.css';
import { useSelector } from 'react-redux';

export default function StarContainer(props) {
  const stars = useSelector(state => state.app.stars);

  const emptyStar = "star emptyStar";
  const fullStar = "star fullStar";

  const getStars = function() {
    let allStars = [];
    for (let starCount = 0; starCount < stars; starCount++) {
      allStars.push(fullStar);
    }
    for (let emptyCount = 0; emptyCount < (3 -stars); emptyCount++) {
      allStars.push(emptyStar);
    }

    return allStars.map((star, starN) => {
      return (
        <span className={star} key={starN}>&#9733;</span>
      );
    });
  }

  return (
    <div className="StarContainer">
      {getStars()}
    </div>
  )
}
