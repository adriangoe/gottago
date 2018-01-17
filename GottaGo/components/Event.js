import React, { Component } from 'react';
import {
  ScrollView,         // Scrollable container
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles button presses
  View                // Container component
} from 'react-native';
import Emoji from 'react-native-emoji';
import { Subtitle, Title, Card, Caption, Button, Image } from '@shoutem/ui';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';

export default class Event extends Component {

    render() {
        return (
            <View height="100%">
                <Image
                    styleName="large-banner"
                    source={ this.props.info.image }
                    style={styles.eventimg}
                />
                <TouchableOpacity
                  // Go to the previous screen
                  onPress={() => {this.props.navigator.pop();}}
                  // Dim button a little bit when pressed
                  activeOpacity={0.7}
                  // Pass button style
                  style={styles.backbtn}
                >
                    <Icon size={30} color="white" name="arrow-left" />
                </TouchableOpacity>
                <TouchableOpacity
                  // Dim button a little bit when pressed
                  activeOpacity={0.7}
                  // Pass button style
                  style={styles.sharebtn}
                >
                    <Icon size={30} color="white" name="share" />
                </TouchableOpacity>
                <TouchableOpacity
                  // Dim button a little bit when pressed
                  activeOpacity={0.7}
                  // Pass button style
                  style={styles.lovebtn}
                >
                    <Icon size={30} color="white" name="heart" />
                </TouchableOpacity>
                <View style ={ styles.infobox }>
                    <Subtitle style={styles.eventtags}>{ this.props.info.tags }</Subtitle>
                    <Title styleName="bold" style={styles.eventname}> { this.props.info.title } </Title>
                    <Subtitle><Emoji name={ this.props.info.emoji }/> trending</Subtitle>
                    <Text style={styles.eventtext}>
                        { this.props.info.description }
                        {"\n"}
                    </Text>
                    <Image style={{ paddingTop: 10, padding: 2, width: "100%", }}
                        styleName="large-banner"
                        source={ { uri: "https://i.pinimg.com/564x/75/cb/e4/75cbe46308097d97689102eddfb6d943.jpg"} }
                    />
                    <Text style={styles.eventtext}>
                        Address:{"\n"}
                        1412 Market Street{"\n"}
                        94108 San Francisco{"\n"}
                    </Text>

                </View>



                <View style = { styles.footer }>
                    <Subtitle styleName="bold" style={styles.price}>
                        10.000 Won
                    </Subtitle>
                    <View style={styles.center}>
                        <Text>
                            <Icon name="star" size={16} color="gold"/>
                            <Icon name="star" size={16} color="gold"/>
                            <Icon name="star" size={16} color="gold"/>
                            <Icon name="star" size={16} color="gold"/>
                            <Icon name="star" size={16} color="gold"/>
                        </Text>
                        <Text style={ styles.review }>
                            15 Reviews
                        </Text>
                    </View>
                    <Button style={styles.gobtn}>
                        <Text style={ styles.white }>I GOTTA GO</Text>
                    </Button>
                </View>
            </View>
        );
    }
}