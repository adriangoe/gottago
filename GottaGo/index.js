import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Screen } from '@shoutem/ui';

import Screens from './components/Map';
import Event from './components/Event';
import { BottomTopics } from './components/Topics';

import NavigationExperimental from 'react-native-deprecated-custom-components'

import {
  Image,              // Renders background image
  ScrollView,         // Scrollable container
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles button presses
  View                // Container component
} from 'react-native';

const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'map') {
    return (
      // TODO: Add List component
            <Screen >
                <Screens navigator={navigationOperations}/>

                <BottomTopics />
            </Screen>
    );
  } else if (route.name === 'event') {
    return (

        <Screen >
            <Event
                info={route.info}
                navigator={navigationOperations}
            />
        </Screen>
    );
  }
};

export default class App extends Component {
  componentDidMount() {
    // Hide the status bar
  }

  render() {
    return (
      // Handle navigation between screens
      <NavigationExperimental.Navigator
        // Default to list route
        initialRoute={{name: 'map'}}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}

AppRegistry.registerComponent('GottaGo', () => App);
