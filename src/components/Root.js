import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Main from './Main';

export default class Root extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header className="App-header"/>
        <Main className="App-main"/>

      {/* <MyFancyComponent locations={items} /> */}  
      </div>
    );
  }
}
