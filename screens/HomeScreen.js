import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-elements'
import Button from '../components/Button'
import colors from '../assets/colors'

const backgroundImage = { uri: "https://storage.googleapis.com/employee-tools.appspot.com/App/images/home_background.png" }

const HomeScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.whiteBG}>
          <View style={styles.innerContainer}>
            <View style={styles.messageContainer}>
            <Text style={[styles.welcomeText, styles.large]}>Welcome to the</Text>
            <Text style={[styles.welcomeText, styles.medium]}>University of Michigan</Text>
            <Text style={[styles.welcomeText, styles.small]}>Museum of Natural History</Text>
            </View>

            <View style={styles.buttonContainer}>
            <Button onPress={() => navigation.navigate('Map')}>Map</Button>
            <Button onPress={() => navigation.navigate('About')}>About</Button>
            </View>
          </View>
        </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteBG: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  innerContainer:{
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },
  welcomeText: {
    fontFamily: 'Whitney-Black',
    color: colors.lightBlue,
  },
  large: {
    fontSize: 36
  },
  medium: {
    fontSize: 32
  },
  small: {
    fontSize: 28
  },
});

export default HomeScreen;
