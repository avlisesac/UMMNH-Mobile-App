import React, {useState} from 'react'
import { ActivityIndicator, Image, ImageBackground, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'

import colors from '../assets/colors'

const mapImage = { uri: "https://storage.googleapis.com/employee-tools.appspot.com/App/images/Maps/Blank_1920.png" }

const MapScreen = () => {
  const [rotated, setRotated] = useState(false)

  return(
    <View style={styles.container}>
      <View style={rotated ? styles.imageWrapperRotated : styles.imageWrapperNormal }>
        <Image
          source={mapImage}
          style={styles.image}
        />
      </View>
      {/*
        <View style={styles.iconWrapper}>
        <Icon
        size={25}
        name='refresh-outline'
        type='ionicon'
        color={colors.lightBlue}
        raised
        reverse
        onPress={() => setRotated(!rotated)}
        />
        </View>

      */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green'
  },
  imageWrapperNormal: {
    flex: 1,
    // backgroundColor: 'blue'

  },
  imageWrapperRotated: {
    flex: 1,
    // flexDirection: 'row',
    transform: [{rotate: '90deg'}],
    // backgroundColor: 'blue'

  },
  image: {
    // backgroundColor: 'red',
    flex: 1,
    resizeMode: 'contain'
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
})

export default MapScreen
