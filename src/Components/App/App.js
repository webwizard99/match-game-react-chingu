import React from 'react';
import './App.css';
import MenuBar from '../MenuBar/MenuBar';


import cardManager from '../../Utilities/cardManager';



class App extends React.Component {
  
  componentDidMount() {
    cardManager.init();
  }
  
  render() {
    return (
      <div className="App">
        <MenuBar />
      </div>
    )
  }
}

export default App;