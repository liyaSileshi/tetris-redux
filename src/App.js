import React from 'react';
import './App.css';
import GridSquare from './components/grid-square'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='tetris-header'> Tetris </h1>
      </header>
      <GridSquare color='1'/>
    </div>
  );
}

export default App;
