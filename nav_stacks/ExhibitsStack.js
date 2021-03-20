import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExhibitsScreen from '../screens/ExhibitsScreen';
import colors from '../assets/colors'

const ExhibitsStackNavigator = createStackNavigator();

const ExhibitsStack = ({ navigation }) => {
  return(
    <ExhibitsStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.yellow
        },
        headerTintColor: '#fff'
      }}
    >
      <ExhibitsStackNavigator.Screen name="Exhibits" component={ExhibitsScreen} />
    </ExhibitsStackNavigator.Navigator>
  )
}

export default ExhibitsStack;
