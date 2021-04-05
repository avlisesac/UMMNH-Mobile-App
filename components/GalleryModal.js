import React from 'react'
import { Image, Modal, StyleSheet, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CustomText from './CustomText'
import Button from './Button'

const Tab = createMaterialTopTabNavigator();

const GalleryModal = ({modalVisible, setModalVisible, galleryContent}) => (
  <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {setModalVisible(!modalVisible)}}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Tab.Navigator
          swipeEnabled={true}
        >
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

        <View>
          <Button onPress={() => setModalVisible(!modalVisible)}>Close Gallery</Button>
        </View>
      </View>
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  centeredView:{
    flex: 1,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
