import React, { Component } from 'react';
import Title from './components/Title'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content='Can You Escape the Gallows...?'/>
      </div>
    );
  }
}

export default App;
