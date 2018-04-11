import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import MyMapComponent from './MyMapComponent';

const Location = ({ match }) => {

  return (
      <div>

        <div className="row">
            <div className="col-md-2 col-sm-3">
        <ul className="nav flex-column">
            <li><Link className="nav-link" to={`${match.url}/map`}>My Location</Link></li>
            <li><Link className="nav-link" to={`${match.url}/css`}>CSS</Link></li>
            <li><Link className="nav-link" to={`${match.url}/react`}>React</Link></li>
        </ul>
              </div>
              <div className="col-md-10 col-sm-9">
                  <Route path={`${match.path}/map`} component={MyMapComponent} />
                  <Route path={`${match.path}/css`} render={() => { return <h1>CSS by Racheal Andrews</h1> }}/>
                  <Route path={`${match.path}/react`} render={() => { return <h1>React by Fullstack.io book</h1> }}/>
                  <Route path={`${match.path}/:id`} component={Child} />
              </div>
          </div>
    
      </div>
  );
}
const Child = ({ match }) => (
  <div>
    <h3>URL ID parameter: {match.params.id}</h3>
  </div>
);
export default Location;
