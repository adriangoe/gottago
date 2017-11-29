import React, { Component } from 'react';
import { Text } from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }

export default class GottaGoApp extends Component {
  render() {
    return (
      state = {
          mapRegion: null,
          gpsAccuracy: null
      }
      watchID = null

      componentWillMount() {
          this.watchID = navigator.geolocation.watchPosition((position) => {
              let region = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: 0.00922*1.5,
                  longitudeDelta: 0.00421*1.5
              }

              this.onRegionChange(region, position.coords.accuracy);
          });
      }

      componentWillUnmount() {
          navigator.geolocation.clearWatch(this.watchID);
      }

      onRegionChange(region, gpsAccuracy) {
          this.fetchVenues(region);

          this.setState({
              mapRegion: region,
              gpsAccuracy: gpsAccuracy || this.state.gpsAccuracy
          });
      }
    );
  }
}
