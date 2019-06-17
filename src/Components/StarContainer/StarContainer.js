import React from 'react';
import './StarContainer.css';
import { useSelector } from 'react-redux';

export default function StarContainer(props) {
  const stars = useSelector(state => state.app.stars);

  
}
