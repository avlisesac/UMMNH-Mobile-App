import React from 'react'
import { Image, Modal, SafeAreaView, StyleSheet, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CustomText from './CustomText'
import Button from './Button'

const Tab = createMaterialTopTabNavigator();

const GalleryModal = ({route, navigation}) => {
  const { galleryContent } = route.params

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <Tab.Navigator>
        {
          galleryContent.map((item, index) => {
            const GalleryItem = () => (
              <View style={styles.galleryItem}>
              <View style={styles.galleryImageWrapper}>
              <Image source={item.imageFile} style={styles.galleryImage}/>
              </View>
              <CustomText>{item.imageDescription}</CustomText>
              </View>
            )
            return(
              <Tab.Screen key={index} name={`${index + 1}`} component={GalleryItem} />
            )
          })
        }
        </Tab.Navigator>
        <View style={styles.buttonWrapper}>
          <Button onPress={() => navigation.goBack()}>Close Gallery</Button>
        </View>
      </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    margin: 10
  },
  galleryItem: {
    flex: 1,
  },
  galleryImageWrapper: {
    flex: 1,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  galleryItemText: {
    textAlign: 'center'
  },
})

export default GalleryModal
