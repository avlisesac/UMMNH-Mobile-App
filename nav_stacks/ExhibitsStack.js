import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExhibitsScreen from '../screens/ExhibitsScreen';
import ExhibitScreen from '../screens/ExhibitScreen';
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
      <ExhibitsStackNavigator.Screen name="Exhibit" component={ExhibitScreen} options={({route}) => ({title: route.params.item.title})}/>
    </ExhibitsStackNavigator.Navigator>
  )
}

export default ExhibitsStack;
