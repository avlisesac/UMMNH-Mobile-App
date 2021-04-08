import React from 'react'
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import colors from '../assets/colors'
import CustomText from '../components/CustomText'
import Button from '../components/Button'

const Tab = createMaterialTopTabNavigator()

const NavigationScreen = ({route, navigation}) => {
  const {item} = route.params

  return(
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <Tab.Navigator>
          {
            item.images.map((item, index) => {
              const NavImage = () => (
                <View style={styles.imageWrapper}>
                  <ImageBackground
                    source={item.image}
                    style={styles.image}
                    accessible={true}
                    accessibilityLabel={item.description}
                    accessibilityRole={"image"}
                  />
                </View>
              )

              return(
                <Tab.Screen key={index} name={`${index + 1}`} component={NavImage} />
              )
            })
          }
        </Tab.Navigator>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <View style={styles.blurb}>
          <CustomText>{item.blurb}</CustomText>
        </View>

        <View style={styles.buttonWrapper}>
          <Button onPress={() => navigation.navigate(item.next)}>Found it!</Button>
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
  imageWrapper: {
    aspectRatio: 1920/1080,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
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

export default NavigationScreen
