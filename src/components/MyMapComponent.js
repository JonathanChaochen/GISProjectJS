import React from 'react';
import MapContainer from './MapContainer';

export default class MyMapComponent extends React.Component {
  state = {
    isMarkerShown: false,
    current: { lat: -43.53793, lng: 172.6412793 },
    address: ''
  };

  componentDidMount() {
    // this.delayedShowMarker();
    this.fetchAddress();
  }

  currentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let lat = Number(position.coords.latitude);
      let lng = Number(position.coords.longitude);

      this.setState({ current: { lat, lng } }, () => {
        console.log(this.state.current);
        this.fetchAddress();
      });
    });
  };

  fetchAddress = () => {
    const api = process.env.REACT_APP_MAPS_API;
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
        this.state.current.lat
      },${this.state.current.lng}&key=${api}`
    )
      .then(res => res.json())
      .then(respJson => {
        this.setState({ address: respJson.results[0].formatted_address });
      });
  };

  // delayedShowMarker = () => {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true });
  //   }, 3000);
  // };

  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false });
  //   this.delayedShowMarker();
  // };

  render() {
    // const items = [
    //   { lat: -43.54776, lng: 172.49304 },
    //   { lat: -43.51776, lng: 172.47304 },
    //   { lat: -43.45776, lng: 172.52304 }
    // ];
    return (
      <div>
        <MapContainer locations={this.state.current} />
        <a
          className="btn btn-info"
          onClick={this.currentLocation}
          role="button"
        >
          Current Location
        </a>
        <p>Lat: {this.state.current.lat}</p>
        <p>Lng: {this.state.current.lng}</p>
        <p>Address: {this.state.address} </p>
        <p> {process.env.REACT_APP_MAPS_API} </p>
      </div>
    );
  }
}
