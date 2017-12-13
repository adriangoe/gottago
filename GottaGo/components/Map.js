import React, { Component } from "react";
import { Subtitle, Title, Card, Caption, Button } from '@shoutem/ui';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Emoji from 'react-native-emoji';
import ActionButton from 'react-native-action-button';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = width - 50;

const Images = [
  { uri: "https://i.pinimg.com/originals/df/07/90/df07908ae873ddf3566f6f3a174be932.jpg" },
  { uri: "https://seattlelocalfood.files.wordpress.com/2014/12/jars-of-kimchi-2.jpg" },
  { uri: "https://www.tribaeast.com/wp-content/uploads/2017/07/4D-Fun-Remix-Fun-World-Club-Dome-Korea-2017-middle-stage-Impression-800x400.png" },
  { uri: "https://pbs.twimg.com/media/DPwzws5XkAAFQS6.jpg" }
]

export default class screens extends Component {
  state = {
    markers: [
      {
        coordinate: {
          latitude: 37.573103,
          longitude: 127.000923,
        },
        title: "Lantern Festival",
        tags: "#culture #cheongyeong #outdoors",
        description: "some cool event for cool people",
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 37.557319,
          longitude: 126.981697,
        },
        title: "Kimchi Cooking Class",
        tags: "#culture #myeongdong #indoors #cheap",
        description: "some cool event for cool people",
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 37.574192,
          longitude: 126.935005,
        },
        title: "Epic Party",
        tags: "#party #incheon #outdooors",
        description: "some cool event for cool people",
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 37.512670,
          longitude: 127.034569,
        },
        title: "Fun times with fun people",
        tags: "#party #gangnam #indoors #minerva",
        description: "some cool event for cool people",
        image: Images[3],
      },
    ],
    region: {
      latitude: 37.54,
      longitude: 126.991310,
      latitudeDelta: 0.16,
      longitudeDelta: 0.16,
    },
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH ); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: ['rgba(239, 239, 239, 1)', 'rgba(255,78, 0, 1)', 'rgba(239, 239, 239, 1)']
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.6, 1, 0.6],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
      <View height="60%">
        <Title styleName="h-center multiline" style={styles.mapHeader}>
            #GottaGo
        </Title>
        <MapView
          ref={map => this.map = map}
          provider={PROVIDER_GOOGLE}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  backgroundColor: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                <Emoji name="100"/>
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
          <TouchableHighlight style={styles.addButton}
            underlayColor='#ff7043' onPress={()=>{console.log('pressed')}}>
            <Icon name="cursor" size={19} color="black" backgroundColor="rgba(0,0,0,0)"/>
          </TouchableHighlight>
          <TouchableHighlight style={styles.addButton, styles.b2}
            underlayColor='#ff7043' onPress={()=>{console.log('pressed')}}>
            <Icon name="location-pin" size={19} color="black" backgroundColor="rgba(0,0,0,0)"/>
          </TouchableHighlight>
          <TouchableHighlight style={styles.addButton, styles.b3}
            underlayColor='#ff7043' onPress={()=>{console.log('pressed')}}>
            <Icon name="direction" size={19} color="black" backgroundColor="rgba(0,0,0,0)"/>
          </TouchableHighlight>
      </View>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <Card key={index} style={styles.card} >
              <Image
                styleName="medium-wide"
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.overlay}>
                <Subtitle style={styles.white} styleName="sm-gutter-horizontal">{ marker.tags }</Subtitle>
              </View>
              <View style={styles.overlay2}>
                  <Icon.Button name="heart" size={22} color="white" backgroundColor="rgba(0,0,0,0)" onPress={() => this.name="heart-off"} />
              </View>
              <View styleName="content" style={styles.textContent}>
                <Subtitle style={ styles.title } >{marker.title} <Emoji name="fire"/></Subtitle>
                <View styleName="horizontal v-center space-between">
                  <Caption style={ styles.caption }>{marker.description}</Caption>
                </View>
              </View>
            </Card>


          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}
