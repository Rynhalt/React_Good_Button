import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton/>
      </header>
    </div>
  );
}

function LikeButton() {
  return <span>いいねぼたん</span>
}

export default App;
