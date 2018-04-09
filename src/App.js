import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyFancyComponent from './components/MapContainer';

class App extends Component {
  render() {
    const items = [
      { lat: -43.54776, lng: 172.49304 },
      { lat: -43.51776, lng: 172.47304 },
      { lat: -43.45776, lng: 172.52304 }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Our Map</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyFancyComponent locations={items} />
      </div>
    );
  }
}

export default App;
