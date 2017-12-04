import React, { Component } from 'react';
import { View, Button, Text, Overlay, Heading, Icon } from '@shoutem/ui';

import styles from './styles';

const TOPICS = ['maps', 'add-to-favorites-off', 'search', 'events', 'user-profile'];

const BottomTopics = ({ onTopicSelect }) => (
    <View styleName="horizontal">

        <Button key="maps" styleName="full-width active">
            <Icon name="maps" />
        </Button>
        <Button key="add-to-favorites-on" styleName="full-width muted">
            <Icon name="add-to-favorites-on" />
        </Button>
        <Button key="search" styleName="full-width muted">
            <Icon name="search" />
        </Button>
        <Button key="events" styleName="full-width muted">
            <Icon name="events" />
        </Button>
        <Button key="user-profile" styleName="full-width muted">
            <Icon name="user-profile" />
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