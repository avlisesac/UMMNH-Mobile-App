import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TourScreen from '../screens/TourScreen';
import colors from '../assets/colors'

const TourStackNavigator = createStackNavigator();

const TourStack = ({ navigation }) => {
  return(
    <TourStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.pink
        },
        headerTintColor: '#fff'
      }}
    >
      <TourStackNavigator.Screen name="Tour" component={TourScreen} />
    </TourStackNavigator.Navigator>
  )
}

export default TourStack;
