import React, { Component } from 'react'
import HangmanGame from './game/HangmanGame'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <HangmanGame />
      </div>
    );
  }
}

export default App
