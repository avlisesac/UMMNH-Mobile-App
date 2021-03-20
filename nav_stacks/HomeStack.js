import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import MapScreen from '../screens/MapScreen';

import colors from '../assets/colors'

const HomeStackNavigator = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return(
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.lightBlue
        },
        headerTintColor: '#fff'
      }}
    >
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen name="About" component={AboutScreen} />
      <HomeStackNavigator.Screen name="Map" component={MapScreen} />

    </HomeStackNavigator.Navigator>
  )
}

export default HomeStack;
