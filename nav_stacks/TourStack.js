import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/colors'
import * as exhibits from '../assets/exhibits'
import nav from '../assets/exhibits/nav'

import TourScreen from '../screens/TourScreen'
import ExhibitScreen from '../screens/ExhibitScreen'
import NavigationScreen from '../screens/NavigationScreen'
import EndOfTourScreen from '../screens/EndOfTourScreen'

import GalleryModal from '../components/GalleryModal';

const TourStackNavigator = createStackNavigator();
const ModalStackNavigator = createStackNavigator();
// CREATE GALLERY MODAL HERE, TOO!

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
      {/* Tour Preview */}
      <TourStackNavigator.Screen name="Tour" component={TourScreen} />

      {/* Navigation Screens */}
      <TourStackNavigator.Screen
        name="Find: 1/7"
        component={NavigationScreen}
        initialParams={{
          item: nav.nav1
        }}
      />
      <TourStackNavigator.Screen
        name="Find: 2/7"
        component={NavigationScreen}
        initialParams={{
          item: nav.nav2
        }}
      />
      <TourStackNavigator.Screen
        name="Find: 3/7"
        component={NavigationScreen}
        initialParams={{
          item: nav.nav3
        }}
      />
      <TourStackNavigator.Screen
        name="Find: 4/7"
        component={NavigationScreen}
        initialParams={{
          item: nav.nav4
        }}
      />
      <TourStackNavigator.Screen
        name="Find: 5/7"
        component={NavigationScreen}
        initialParams={{
          item: nav.nav5
        }}
      />
      <TourStackNavigator.Screen
        name="Find: 6/7"
        component={NavigationScreen}
        initialParams={{
          item: nav.nav6
        }}
      />
      <TourStackNavigator.Screen
        name="Find: 7/7"
        component={NavigationScreen}
        initialParams={{
          item: nav.nav7
        }}
      />

      {/* Stops */}
      <TourStackNavigator.Screen
        name="Stop: 1/7"
        component={ExhibitScreen}
        initialParams={{
          item: exhibits.mastodons,
          nextScreen: "Find: 2/7"
        }}
      />
      <TourStackNavigator.Screen
        name="Stop: 2/7"
        component={ExhibitScreen}
        initialParams={{
          item: exhibits.michiganRivers,
          nextScreen: "Find: 3/7"
        }}
      />

      <TourStackNavigator.Screen
        name="Stop: 3/7"
        component={ExhibitScreen}
        initialParams={{
          item: exhibits.giantCell,
          nextScreen: "Find: 4/7"
        }}
      />

      <TourStackNavigator.Screen
        name="Stop: 4/7"
        component={ExhibitScreen}
        initialParams={{
          item: exhibits.majungasaurus,
          nextScreen: "Find: 5/7"
        }}
      />

      <TourStackNavigator.Screen
        name="Stop: 5/7"
        component={ExhibitScreen}
        initialParams={{
          item: exhibits.quetz,
          nextScreen: "Find: 6/7"
        }}
      />

      <TourStackNavigator.Screen
        name="Stop: 6/7"
        component={ExhibitScreen}
        initialParams={{
          item: exhibits.dynamicPlanet,
          nextScreen: "Find: 7/7"
        }}
      />

      <TourStackNavigator.Screen
        name="Stop: 7/7"
        component={ExhibitScreen}
        initialParams={{
          item: exhibits.mammoth,
          nextScreen: "End of Tour"
        }}
      />

      <TourStackNavigator.Screen
        name="End of Tour"
        component={EndOfTourScreen}
      />

    </TourStackNavigator.Navigator>
  )
}

const ModalStack = ({navigation}) => {
  return(
    <ModalStackNavigator.Navigator headerMode="none">
      <ModalStackNavigator.Screen
        name="Main"
        component={TourStack}
        options={{headerShown: false}}
      />
      <ModalStackNavigator.Screen name="Gallery" component={GalleryModal} />
    </ModalStackNavigator.Navigator>
  )
}

export default ModalStack;
