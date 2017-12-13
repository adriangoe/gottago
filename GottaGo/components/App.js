import React, { Component } from 'react';
import { Screen } from '@shoutem/ui';
import { stringify as queryString } from 'query-string';

import styles from './styles';
import Screens from './Map';
import { BottomTopics } from './Topics';

class App extends Component {
    state = {
        mapRegion: null,
        gpsAccuracy: null
    }
    watchID = null

    render() {

        return (
            <Screen>
                <Screens />

                <BottomTopics />
            </Screen>
        );

    }
}

export default App;
