import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = width - 50;

const styles = {
    fullscreen: {
        flex: 1,
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapHeader: {
        backgroundColor: "rgba(239, 239, 239, 1)",
        paddingTop: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: "Helvetica",
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    Button: {
    },

    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 3,
      width: "100%",
      height: 30,
      backgroundColor: "rgba(0, 0, 0, .5)",
    },

    overlay2: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 5,
      paddingTop: 115,
      // width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },

    white: {
      color: "rgba(255,255, 255, 1)",
    },

    container: {
      flex: 1,
    },
    scrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 10,
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderWidth: 1,
      borderColor: '#d6d7da',
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      elevation: 5,
      backgroundColor: "#FFF",
      marginHorizontal: 5,
      shadowOffset:{  width: 10,  height: 10,  },
      shadowColor: 'black',
      shadowOpacity: 1.0,
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#d6d7da',
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 1,
      padding: 7,
    },
    title: {
      fontSize: 18,
      marginTop: 0,
      paddingTop: 5,
      fontWeight: "bold",
      color: "rgba(255,78, 0, 1)",
    },
    caption: {
      fontSize: 12,
      color: "black",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
    },
    marker: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: "rgba(255,78, 0, 1)",
      borderWidth: 3,
      borderColor: "rgba(239, 239, 239, 1)",
    },
    ring: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: "rgba(255,78, 0, 0.3)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(239, 239, 239, 1)",
    },
    circle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#ee6e73',
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
  addButton: {
    backgroundColor: 'rgba(239, 239, 239, 1)',
    borderColor: 'rgba(239, 239, 239, 1)',
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  b2: {
    backgroundColor: 'rgba(239, 239, 239, 1)',
    borderColor: 'rgba(239, 239, 239, 1)',
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 115,
    right: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  b3: {
    backgroundColor: 'rgba(239, 239, 239, 1)',
    borderColor: 'rgba(239, 239, 239, 1)',
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 65,
    right: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
}

export default styles;
