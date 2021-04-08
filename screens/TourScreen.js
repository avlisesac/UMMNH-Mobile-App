import React from 'react'
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { Text } from 'react-native-elements'
import colors from '../assets/colors'
import Button from '../components/Button'

const TourScreen = ({navigation}) => {
  return(
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {/* Jumbotron */}
        <View style={styles.jumbotron}>
          <ImageBackground
            source={require('../assets/images/hero/feedingfrenzy.jpg')}
            style={styles.heroImage}
            accessible={true}
            accessibilityLabel={"Visitors stand in front of a diorama of a prehistoric ocean."}
            accessibilityRole={"image"}
          />
        </View>

        {/* Info */}
        <Text style={styles.title}>Self-Guided Highlights Tour</Text>
        <Text style={styles.subtitle}>45 mins.</Text>
        <View style={styles.blurb}>
          <Text>See the best that the Museum of Natural History has to offer! This tour will last approximately fourty-five minutes and show you our favorite features of this amazing new space. At each stop, you will get additional facts and information that we couldn't quite cram on to the placards. (Trust us, we tried.)</Text>
        </View>

        {/* Button */}
        <View style={styles.buttonWrapper}>
          <Button onPress={() => navigation.navigate('Find: 1/7')}>Let's Go!</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    margin: 10,
  },
  jumbotron: {
    aspectRatio: 1920/1080,
  },
  heroImage: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontFamily: 'Whitney-Black',
    fontSize: 22,
    marginTop: 5,
  },
  subtitle: {
    fontFamily: 'Whitney-Semibold',
    color: colors.darkRed,
    textDecorationLine: 'underline',
    fontSize: 18,
    marginTop: 5,
  },
  blurb: {
    marginTop: 5,
  },
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 20
  }
})

export default TourScreen
