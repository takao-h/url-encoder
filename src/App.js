import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Encode from './EncodeForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Encode />
      </div>
    );
  }
}

export default App;
