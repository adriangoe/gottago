import React, { Component } from "react";
import { Subtitle, Title, Card, Caption, Button } from '@shoutem/ui';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Emoji from 'react-native-emoji';
import ActionButton from 'react-native-action-button';
import NavigationExperimental from 'react-native-deprecated-custom-components'

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


export default class screens extends Component {
  state = {
    markers: [
      {
        coordinate: {
          latitude: 37.573103,
          longitude: 127.000923,
        },
        title: "Seoul Christmas Festival 2017",
        tags: "#festival #free ",
        description: "The Seoul Christmas Festival will take place along Cheonggyecheon Stream from Dec. 9th, 2017 to Jan. 2nd, 2018. See beautiful Christmas decorations and join in the festivities at Cheonggyecheon! Cheonggye Plaza will feature a huge Christmas tree and an illuminated Christmas tree-themed area. The festival is divided into several themed areas; each area will have its own unique vibe and photo zones for visitors to enjoy. Just as with last year, there will be a special Christmas Eve concert and a New Year's concert. Make special Christmas memories at this incredible winter festival!",
        image: { uri: "https://images.myguide-cdn.com/seoul/blog/10-festive-christmas-activities-to-enjoy-in-seoul/large/10-festive-christmas-activities-to-enjoy-in-seoul-100596.jpg" },
        when: "From 9th December 2017 to 2nd January 2018 at Cheonggyecheon",
        link: "http://english.visitseoul.net/event-festival/Seoul-Christmas-Festival-2017_/23746?curPage=1",
        emoji: "christmas_tree",
      },
      {
        coordinate: {
          latitude: 37.557319,
          longitude: 126.981697,
        },
        title: "Seoul Christmas Festival 2017",
        tags: "#festival #free ",
        description: "The Seoul Christmas Festival will take place along Cheonggyecheon Stream from Dec. 9th, 2017 to Jan. 2nd, 2018. See beautiful Christmas decorations and join in the festivities at Cheonggyecheon! Cheonggye Plaza will feature a huge Christmas tree and an illuminated Christmas tree-themed area. The festival is divided into several themed areas; each area will have its own unique vibe and photo zones for visitors to enjoy. Just as with last year, there will be a special Christmas Eve concert and a New Year's concert. Make special Christmas memories at this incredible winter festival!",
        image: { uri: "https://images.myguide-cdn.com/seoul/blog/10-festive-christmas-activities-to-enjoy-in-seoul/large/10-festive-christmas-activities-to-enjoy-in-seoul-100596.jpg" },
        when: "From 9th December 2017 to 2nd January 2018 at Cheonggyecheon",
        link: "http://english.visitseoul.net/event-festival/Seoul-Christmas-Festival-2017_/23746?curPage=1",
        emoji: "christmas_tree",
      },
      {
        coordinate: {
          latitude: 37.574192,
          longitude: 126.935005,
        },
        title: "Seoul Christmas Festival 2017",
        tags: "#festival #free ",
        description: "The Seoul Christmas Festival will take place along Cheonggyecheon Stream from Dec. 9th, 2017 to Jan. 2nd, 2018. See beautiful Christmas decorations and join in the festivities at Cheonggyecheon! Cheonggye Plaza will feature a huge Christmas tree and an illuminated Christmas tree-themed area. The festival is divided into several themed areas; each area will have its own unique vibe and photo zones for visitors to enjoy. Just as with last year, there will be a special Christmas Eve concert and a New Year's concert. Make special Christmas memories at this incredible winter festival!",
        image: { uri: "https://images.myguide-cdn.com/seoul/blog/10-festive-christmas-activities-to-enjoy-in-seoul/large/10-festive-christmas-activities-to-enjoy-in-seoul-100596.jpg" },
        when: "From 9th December 2017 to 2nd January 2018 at Cheonggyecheon",
        link: "http://english.visitseoul.net/event-festival/Seoul-Christmas-Festival-2017_/23746?curPage=1",
        emoji: "christmas_tree",
      },
      {
        coordinate: {
          latitude: 37.512670,
          longitude: 127.034569,
        },
        title: "Seoul Christmas Festival 2017",
        tags: "#festival #free ",
        description: "The Seoul Christmas Festival will take place along Cheonggyecheon Stream from Dec. 9th, 2017 to Jan. 2nd, 2018. See beautiful Christmas decorations and join in the festivities at Cheonggyecheon! Cheonggye Plaza will feature a huge Christmas tree and an illuminated Christmas tree-themed area. The festival is divided into several themed areas; each area will have its own unique vibe and photo zones for visitors to enjoy. Just as with last year, there will be a special Christmas Eve concert and a New Year's concert. Make special Christmas memories at this incredible winter festival!",
        image: { uri: "https://images.myguide-cdn.com/seoul/blog/10-festive-christmas-activities-to-enjoy-in-seoul/large/10-festive-christmas-activities-to-enjoy-in-seoul-100596.jpg" },
        when: "From 9th December 2017 to 2nd January 2018 at Cheonggyecheon",
        link: "http://english.visitseoul.net/event-festival/Seoul-Christmas-Festival-2017_/23746?curPage=1",
        emoji: "christmas_tree",
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
        outputRange: [0, 1, 0],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
      <View height="57%">
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
                  <View style={styles.marker} />
                </Animated.View>
                <Text style={{fontSize: 40, marginTop: -40, opacity: 1, }}><Emoji name={ marker.emoji }/></Text>
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
            <TouchableOpacity
              key={index}
              onPress={()=>{
                // Navigate to a separate movie detail screen
                this.props.navigator.push({
                  name: 'event',
                  info: marker,
                });
              }}
            >
            <Text style={{ padding: 5, fontSize: 13, color: "grey" }}><Emoji name={ marker.emoji } /> trending </Text>
            <Card style={styles.card} >
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
                <Subtitle style={ styles.title } >{marker.title} </Subtitle>
                <View styleName="horizontal v-center space-between">
                  <Caption style={ styles.caption }>{marker.description}</Caption>
                </View>
              </View>
            </Card>
            </TouchableOpacity>


          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}
