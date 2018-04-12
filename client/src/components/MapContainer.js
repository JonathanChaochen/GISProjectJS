import React, { PureComponent } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

function findCenter(locations) {
  const maxCallback = (acc, cur) => Math.max(acc, cur);
  const minCallback = (acc, cur) => Math.min(acc, cur);
  
  const latmin = locations.map(location => location.lat)
    .reduce(minCallback, -Infinity);
  const latMax = locations.map(location => location.lat)
    .reduce(maxCallback, Infinity);
  const lngMin = locations.map(location => location.lng)
    .reduce(minCallback, -Infinity);
  const lngMax = locations.map(location => location.lng)
    .reduce(maxCallback, Infinity);
  
    return { 
      lat: (latmin + latMax) / 2,
      lng: (lngMin + lngMax) / 2
    };
}

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={10}
    center={{ lat: props.locations[0].lat, lng: props.locations[0].lng }}
  >
    {props.locations.map((location,i) => (
      <Marker position={{ lat: location.lat, lng: location.lng }} key={i}/>
    ))}
  </GoogleMap>
));

export default class MyFancyComponent extends PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        locations={this.props.locations}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}
