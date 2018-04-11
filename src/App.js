import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './components/Root';

class App extends Component {
  state = {
    gists: null
  };

  componentDidMount = () => {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists });
      });
  };

  render() {
    return (
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
  }
}

export default App;
