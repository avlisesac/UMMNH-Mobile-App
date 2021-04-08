import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExhibitsScreen from '../screens/ExhibitsScreen';
import ExhibitScreen from '../screens/ExhibitScreen';
import GalleryModal from '../components/GalleryModal';
import colors from '../assets/colors'

const ExhibitsStackNavigator = createStackNavigator();
const ModalStackNavigator = createStackNavigator();

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

const ModalStack = ({navigation}) => {
  return(
    <ModalStackNavigator.Navigator headerMode="none">
      <ModalStackNavigator.Screen
        name="Main"
        component={ExhibitsStack}
        options={{headerShown: false}}
      />
      <ModalStackNavigator.Screen name="Gallery" component={GalleryModal} />
    </ModalStackNavigator.Navigator>
  )
}

export default ModalStack;
