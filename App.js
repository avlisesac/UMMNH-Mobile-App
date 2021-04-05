import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Text } from 'react-native-elements'

import colors from './assets/colors'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from './nav_stacks/HomeStack';
import TourStack from './nav_stacks/TourStack';
import EventsStack from './nav_stacks/EventsStack';
import ExhibitsStack from './nav_stacks/ExhibitsStack';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const UMMNHTheme = {
  dark: false,
  colors: {
    primary: '#00b6f1',
    background: '#fff',
    card: '#fff',
    text: '#000',
    border: '#555555',
    notification: '#ffcb05',
  }
}

const App = () => {
  const [fontsLoaded, error] = useFonts({
    'Whitney-Black': require('./assets/fonts/Whitney-Black-Bas.otf'),
    'Whitney-Semibold': require('./assets/fonts/Whitney-Semibold-Bas.otf')
  })

  if(!fontsLoaded){
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator color={colors.lightBlue} size="large" />
      </View>
    )
  } else {
    return (
      <NavigationContainer theme={UMMNHTheme}>
      <Tabs.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({focused, color, size }) => {
          let iconName;

          if(route.name === "Home") {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === "Tour") {
            iconName = focused ? 'map' : 'map-outline'
          } else if (route.name === "Events") {
            iconName = focused ? 'calendar' : 'calendar-outline'
          } else if (route.name === "Exhibits") {
            iconName = focused ? 'list' : 'list-outline'
          }
          return <Ionicons name = {iconName} size={size} color={color} />
        }
      })}
      tabBarOptions = {{
        activeTintColor: "#00b6f1",
        incactiveTintColor: "gray"
      }}
      >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Tour" component={TourStack} />
      <Tabs.Screen name="Events" component={EventsStack} />
      <Tabs.Screen name="Exhibits" component={ExhibitsStack} />

      </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
