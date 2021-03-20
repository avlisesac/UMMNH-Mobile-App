import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EventsScreen from '../screens/EventsScreen';
import colors from '../assets/colors'

const EventsStackNavigator = createStackNavigator();

const EventsStack = ({ navigation }) => {
  return(
    <EventsStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.lightGreen
        },
        headerTintColor: '#fff'
      }}
    >
      <EventsStackNavigator.Screen name="Events" component={EventsScreen} />
    </EventsStackNavigator.Navigator>
  )
}

export default EventsStack;
