import React from 'react';
import app from './App.css';
import Game from './Game.js';

function App() {
  // Creating the container and importing
  // Game component
  return (
    <div className={app.Game__main_container}>
      <h1 className={app.Game__heading}>Welcome to the Brain Twister game</h1>
      <div className={app.Game__container}>
        <Game />
      </div>
    </div>
  );
}

export default App;
