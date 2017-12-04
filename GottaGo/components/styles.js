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
        backgroundColor: "rgba(255, 255, 255, 1)",
        paddingTop: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    Button: {
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
      backgroundColor: "rgba(255, 255, 255, .7)",
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      elevation: 2,
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
      padding: 10,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
    },
    marker: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "rgba(130,4,150, 0.3)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(130,4,150, 0.5)",
    }
}

export default styles;
