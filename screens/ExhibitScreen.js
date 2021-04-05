import React, { useState } from 'react'
import {
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Image } from 'react-native-elements'
import Button from '../components/Button'
import CustomText from '../components/CustomText'
import GalleryModal from '../components/GalleryModal'
import AudioPlayer from '../components/AudioPlayer'
import TLAS from '../components/TLAS'
import WhileYoureHere from '../components/WhileYoureHere'
import colors from '../assets/colors'

const ExhibitScreen = ({route, navigation}) => {
  const {item} = route.params;
  const [fullTextVisible, setFullTextVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  return(
    <SafeAreaView style={{flex: 1}}>
      <GalleryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        galleryContent={item.gallery}
      />
      <ScrollView style={styles.mainContainer}>

        {/* Header/Jumbotron */}
        <View style={styles.jumbotron}>
          <ImageBackground
            source={item.heroImage}
            style={styles.heroImage}
            accessible={true}
            accessibilityLabel={item.heroImageAlt}
            accessibilityRole={"image"}
          >
          <View style={styles.imageGalleryButtonWrapper}>
            <Button onPress={() => setModalVisible(true)}>Image Gallery</Button>
          </View>
          </ImageBackground>
        </View>

        {/* Basic Info */}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <View style={styles.blurb}>
          <CustomText>{item.blurb}</CustomText>
        </View>


        {/* Audio Player */}
        <AudioPlayer
          fullTextVisible={fullTextVisible}
          setFullTextVisible={setFullTextVisible}
          item={item}
        />

        {/* Full Text */}
        { fullTextVisible &&
          <View style={styles.fullText}>
            <CustomText>{item.fullText}</CustomText>
          </View>
        }
        {/* Think Like a Scientist */}
        <TLAS item={item} />

        {/* While You're Here */}
        <WhileYoureHere item={item} />

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
  },
  jumbotron: {
    aspectRatio: 1920/1080,
  },
  heroImage: {
    width: '100%',
    height: '100%'
  },
  imageGalleryButtonWrapper: {
    position: 'absolute',
    bottom: 5,
    width: '100%'
  },
  title: {
    fontFamily: 'Whitney-Black',
    fontSize: 22,
    marginTop: 5,
  },
  subtitle: {
    fontFamily: 'Whitney-Semibold',
    color: colors.darkRed,
    textDecorationLine: 'underline',
    fontSize: 18,
    marginTop: 5,
  },
  blurb: {
    marginTop: 5,
  },
  fullText: {
    marginTop: 5,
  },
})

export default ExhibitScreen
