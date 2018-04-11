import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/hello">Hello</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/location">Map</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Data dashboard</Link>
          </li>
        </ul>
      </div>
    );
  }
}
