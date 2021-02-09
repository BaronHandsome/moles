import './App.css';
import React from 'react';
import { Context, PlayableWindow, InfoWindow } from './containers';
import { store, increaseScore } from './data/state';


function App() {

  return (
    <Context.Provider value={
      increaseScore
    }>
      <div className="App">
        <h1>Genocide of moles</h1>
        <div className='gameWindow'>
          <PlayableWindow />
          <InfoWindow
            gameDifficult={store.gameDifficult}
            currentScore={store.currentScore}
            quantityFailes={store.quantityFailes}
            attemptTime={store.attemptTime} />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

