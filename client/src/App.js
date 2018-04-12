import React, { Component } from 'react';
import './App.css';
import MyFancyComponent from './components/MapContainer';
import { fetchLocatons } from './services/locations'

class App extends Component {
  state = {
    set: 2,
    locations: []
  }
  
  componentDidMount() {
    this.loadLocations(1);
  }

  loadLocations(set) {
    fetchLocatons(set)
      .then((json) => {
        this.setState({ set: set, locations: json.locations }, )
      });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Our Maps">Our Map {this.state.set}</h1>
        </header>
        <div id="buttons">
          <button class="sets" onClick={() => this.loadLocations(0)}>Set: 0</button>
          <button class="sets" onClick={() => this.loadLocations(1)}>Set: 1</button>
          <button class="sets" onClick={() => this.loadLocations(2)}>Set: 2</button>
        </div>
        <MyFancyComponent locations={this.state.locations} />
      </div>
    );
  }
}

export default App;
