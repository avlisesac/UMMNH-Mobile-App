import React from 'react'
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View
} from 'react-native'
import { Text } from 'react-native-elements'
import Button from '../components/Button'
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = () => {
  return(

    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <Text h3 style={styles.heading}>Version 3</Text>
        <Text style={styles.basicText}>-New exhibits added!</Text>
        <Text style={styles.basicText}>-Updated highlights tour.</Text>
        <Text style={styles.basicText}>-Improved Calendar features for planning trips to the musuem.</Text>
        <Text style={styles.basicText}>-Tab navigation.</Text>
        <Text style={styles.basicText}>-Expanded list of exhibits.</Text>

        <Text h3 style={styles.heading}>About the App</Text>
        <Text style={styles.basicText}>
          Welcome to the University of Michigan Museum of Natural History app! Our app will help you enjoy and interact with the museum on a deeper level.
        </Text>
        <Text style={styles.basicText}>
          Use the <Text style={styles.boldText}>Tour</Text> feature to take a self-guided audio/text tour of our curated Highlights exhibits. Get a behind-the-scenes look at exhibit prep and additional images of things you can't see in the museum itself. Get prompted to use your noodle with our Think Like a Scientist questions!
        </Text>
        <Text style={styles.basicText}>
          Use the <Text style={styles.boldText}>Events</Text> feature to see if there are any special events or Planetarium shows that you can attend today at the museum. You can also pick a specific date if you want to plan ahead!
        </Text>
        <Text style={styles.basicText}>
          Use the <Text style={styles.boldText}>Exhibits</Text> feature to view a full list of all the exhibits we have prepped for you to explore!.
        </Text>

        <Text h3 style={styles.heading}>Connect</Text>
        <View style={styles.socialContainer}>
          <View style={styles.socialButton}>
            <Button onPress={() => Linking.openURL('https://lsa.umich.edu/ummnh')}>
              <Ionicons name='globe-outline' size={18}/>
            </Button>
          </View>
          <View style={styles.socialButton}>
            <Button onPress={() => Linking.openURL('https://www.facebook.com/ummnh/')}>
              <Ionicons name='logo-facebook' size={18}/>
            </Button>
          </View>
          <View style={styles.socialButton}>
            <Button onPress={() => Linking.openURL('https://twitter.com/ummnh')}>
              <Ionicons name='logo-twitter' size={18}/>
            </Button>
          </View>
          <View style={styles.socialButton}>
            <Button onPress={() => Linking.openURL('https://www.instagram.com/ummnh_museum/')}>
              <Ionicons name='logo-instagram' size={18}/>
            </Button>
          </View>
        </View>

        <Text h3 style={styles.heading}>Credits</Text>
        <Text style={styles.basicText}>Developed in-house at the University of Michigan Museum of Natural History by Case Silva 👋👋</Text>
        <Text style={styles.basicText}>UMMNH is a part of the University of Michigan's College of Literature, Science, and the Arts.</Text>

        <Text h3 style={styles.heading}>Contribute</Text>
        <Text style={styles.basicText}>The museum is partially supported by the generosity of its donors and sponsors. If you would like to support the museum, please follow the link below to make a donation.</Text>
        <Button onPress={() => Linking.openURL('https://leadersandbest.umich.edu/find/#!/lib/lsa-mus-ummnh')}>Make a Donation</Button>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontFamily: 'Whitney-Black',
    marginTop: 5,
    marginBottom: 10,
  },
  basicText: {
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold'
  },
  socialContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  socialButton: {
    flex: 1,
    width: '100%'
  }
})

export default AboutScreen
