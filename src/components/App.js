import React, { Component } from 'react';
import Wallet from './Wallet';
import BitcoinBalance from './BitcoinBalance';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Loot</h1>
        <Wallet />
        <BitcoinBalance />
      </div>
    );
  }
}

export default App;
