import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Hello from './Hello';
import About from './About';
import Location from './Location';
import Login, { fakeAuth } from './Login';
import Admin from './Admin';
import PrivateRoute from './PrivateRoute';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hello" component={Hello} />
          <Route path="/about" component={About} />
          <Route path="/location" component={Location} />
          <Route path="/login" component={Login} />
          <PrivateRoute
            authed={fakeAuth.isAuthenticated}
            path="/admin"
            component={Admin}
          />
        </Switch>
      </div>
    );
  }
}
