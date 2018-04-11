import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GEOCODING_API}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: props.locations.lat, lng: props.locations.lng }}
  >
    {console.log(props)}
    {/*props.locations.map((location,i) => (
      <Marker position={{ lat: location.lat, lng: location.lng }} key={i}/>
    ))*/}
    <Marker position={{ lat: props.locations.lat, lng: props.locations.lng }} />
  </GoogleMap>
));

export default MyMapComponent;
