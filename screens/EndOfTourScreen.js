import React from 'react'
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Button from '../components/Button'

const EndOfTourScreen = ({navigation}) => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>That's the end!</Text>
      <Text>You've reached the end of the highlights tour. We hope you've enjoyed your time at the University of Michigan Museum of Natural History. Be sure to come back soon! We're always working to bring you new experiences and opportunities for learning and fun. Hopefully your visit has taught you something new about the earth and it's history, and we hope you're hungry for more!</Text>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => navigation.popToTop()}>Back to the Start</Button>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => Linking.openURL('https://leadersandbest.umich.edu/find/#!/lib/lsa-mus-ummnh')}>
          Make a Donation
        </Button>
      </View>
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    margin: 10,
  },
  title: {
    fontFamily: 'Whitney-Black',
    fontSize: 22,
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonWrapper: {
    marginTop: 20,
    // marginBottom: 20
  },
})

export default EndOfTourScreen
