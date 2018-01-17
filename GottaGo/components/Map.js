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
        tags: "#festival #free",
        description: "The Seoul Christmas Festival will take place along Cheonggyecheon Stream from Dec. 9th, 2017 to Jan. 2nd, 2018. See beautiful Christmas decorations and join in the festivities at Cheonggyecheon! Cheonggye Plaza will feature a huge Christmas tree and an illuminated Christmas tree-themed area. The festival is divided into several themed areas; each area will have its own unique vibe and photo zones for visitors to enjoy. Just as with last year, there will be a special Christmas Eve concert and a New Year's concert. Make special Christmas memories at this incredible winter festival!",
        image: { uri: "https://images.myguide-cdn.com/seoul/blog/10-festive-christmas-activities-to-enjoy-in-seoul/large/10-festive-christmas-activities-to-enjoy-in-seoul-100596.jpg" },
        when: "From 9th December 2017 to 2nd January 2018 at Cheonggyecheon",
        link: "http://english.visitseoul.net/event-festival/Seoul-Christmas-Festival-2017_/23746?curPage=1",
        emoji: "ok_hand",
      },
      {
        coordinate: {
          latitude: 37.5451786,
          longitude: 126.9776692,
        },
        title: "Boys24 Live Concert",
        tags: "#kPop #lessThan60K",
        description: "Description: Boys24 Live Concert is an exciting and high-quality performance of 28  kPop dancers and performers. Subtitle service is available in Korean, English, Japanese, and Chinese through E-FACTORY, an application only available within the performacne hall. Through this application, the audience can also cast their vote for the MVP of their performance.",
        image: { uri: "https://i.ytimg.com/vi/LcW-wd8CNFk/maxresdefault.jpg" },
        when: "Till 31st of December 2017 at BOYS24 Hall, Next to Shinsegae Duty Free Store.",
        link: "http://english.visitkorea.or.kr/enu/ATR/SI_EN_3_2_3.jsp?searchWord=&fid=41028&cate=&cate=&areaCode=&dateStart=12/05/2017&stype=&out_service=&cat=2&gotoPage=2&dateEnd=03/05/2018&eventCategory=A02080100,A02080200,A02080300,A02080400,A02080800,A02080900,A02081000,A02081100,A02081300&cid=2482150",
        emoji: "fire",
      },
      {
        coordinate: {
          latitude: 37.5048465,
          longitude: 127.0271418,
        },
        title: "Pop Art Exhibition",
        tags: "#art #lessThan15K",
        description: "The M Contemporary Art Center will host an exhibition of the 5 greatest artists of the pop art movement from Dec. 15th, 2017 to Apr. 15th, 2018. Located on the 1st floor of the Le Meridien Seoul hotel, the exhibition will feature 160 works of art that have been handpicked to represent the best of pop art. Pop art's subjects were often items that were common in everyday life. One of the most famous examples of pop art may be Andy Warhol's soup cans. Visit the exhibition at M Contemporary to see how the run-of-the-mill can be transformed and elevated into high art. The artworks on exhibition have the power to transport visitors back to 1960s, to the height of the pop art movement.",
        image: { uri: "https://d3rtf5gv0re40d.cloudfront.net/anzax/55/55cc0ddc-67ca-462e-86c3-eed142cff265_750_469.jpg" },
        when: "From 15th December 2017 to 15th April 2018 at Le Meridien Seoul Hotel.",
        link: "http://english.visitseoul.net/event-festival/Hi-POP---Pop-Art-Exhibition_/23917?curPage=1",
        emoji: "eyes",
      },
      {
        coordinate: {
          latitude: 38.3547149,
          longitude: 125.4809314,
        },
        title: "Santa Run 2017",
        tags: "#active #lessThan5K ",
        description: "Get into the Christmas spirit at this year's Santa Run in Sinchon on Dec. 16th, 2017. The Santa Run is a novelty charity run where participants don Santa gear or a Rudolph the Reindeer headband to run the race. At the Santa Run, run times don't matter; participants only need to get over the finish line. Proceeds from the run will be donated to charity. The Santa Run will also feature other events and festivities like a Christmas market and celebratory performances!",
        image: { uri: "https://www.pbs.org/newshour/app/uploads/2015/12/RTX1ZYJX.jpg" },
        when: "16th, December, 2017 at Sinchon",
        link: "http://english.visitseoul.net/event-festival/Santa-Run-2017-EN_/23500?curPage=2",
        emoji: "ok_hand",
      },
      {
        coordinate: {
          latitude: 37.4731977,
          longitude: 127.0381702,
        },
        title: "14th Seoul Dessert Fair",
        tags: "#food #lessThan10K",
        description: "The 14th Seoul Dessert Fair will take place in Yangjae-dong at the aT Center on Dec. 30th and 31st, 2017. Each installment of the Seoul Dessert Fair features oodles of delicious desserts, crafts, activities, and exhibitions. This time around, the festival's theme is strawberries! There will be all sorts of strawberry-centric and strawberry flavored treats on offer. There will also be handmade accessories and crafts for visitors to browse and purchase.",
        image: { uri: "https://2.bp.blogspot.com/-iLdfXIFSrls/V9smkW09cXI/AAAAAAAAyPk/mQNZaOvX8swXpYOeXksUhmZXWsNLE1oMwCLcB/s1600/14079860_1427147127300842_3536112396391484349_n.jpg" },
        when: "December 30th, 2017 & December 31st, 2017 at Yangjae-dong.",
        link: "http://english.visitseoul.net/event-festival/14th-Seoul-Dessert-Fair_/23902?curPage=1",
        emoji: "sunglasses",
      },
      {
        coordinate: {
          latitude: 37.5640253 ,
          longitude: 126.9737793,
        },
        title: "Peace Together:Unification Exhibition",
        tags: "#history #free",
        description: "The 14th Seoul Dessert Fair will take place in Yangjae-dong at the aT Center on Dec. 30th and 31st, 2017. Each installment of the Seoul Dessert Fair features oodles of delicious desserts, crafts, activities, and exhibitions. This time around, the festival's theme is strawberries! There will be all sorts of strawberry-centric and strawberry flavored treats on offer. There will also be handmade accessories and crafts for visitors to browse and purchase.",
        image: { uri: "https://images.adsttc.com/media/images/51f0/2b87/e8e4/4e6d/a300/0105/newsletter/Portada.jpg?1374694275" },
        when: "till Feb. 4th, 2018 at Seoul Museum of Art.",
        link: "http://english.visitseoul.net/event-festival/Peace-Together-Unification-Exhibition_/23903?curPage=1",
        emoji: "sunglasses",
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
