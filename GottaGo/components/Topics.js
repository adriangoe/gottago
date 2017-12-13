import React, { Component } from 'react';
import { View, Button, Text, Overlay, Heading } from '@shoutem/ui';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';

const TOPICS = ['maps', 'add-to-favorites-off', 'search', 'events', 'user-profile'];

const BottomTopics = ({ onTopicSelect }) => (
    <View styleName="horizontal">

        <Button key="maps" style={styles.Button} styleName="full-width active">
            <Icon size={30} color="rgba(255,78, 0, 1)" name="home" />
        </Button>
        <Button key="heart" style={styles.Button} styleName="full-width muted">
            <Icon size={30} color="grey" name="heart" fontSize={60} />
        </Button>
        <Button key="magnifier" style={styles.Button} styleName="full-width muted">
            <Icon size={30} color="grey" name="magnifier" />
        </Button>
        <Button key="calendar" style={styles.Button} styleName="full-width muted">
            <Icon size={30} color="grey" name="calendar" />
        </Button>
        <Button key="user" style={styles.Button} styleName="full-width muted">
            <Icon size={30} color="grey" name="user" />
        </Button>

        {/*
        // {TOPICS.map(topic => (
        //     <Button onPress={() => onTopicSelect(topic)} key={topic} styleName="full-width active">
        //         <Icon name={topic} />
        //     </Button>
        //  ))}
        */}
    </View>
);

export { BottomTopics };