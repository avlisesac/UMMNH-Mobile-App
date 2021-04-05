import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Audio } from 'expo-av'
import Button from './Button'
import colors from '../assets/colors'

const AudioPlayer = ({fullTextVisible, setFullTextVisible, item}) => {
  const [playState, setPlayState] = useState(false)
  const [sound, setSound] = useState()

  const onPlaybackStatusUpdate = playbackStatus => {
    if(playbackStatus.didJustFinish){
      setSound()
      setPlayState(false)
    }
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('unloading sound')
        sound.unloadAsync()
      } : undefined
  }, [sound])

  const handleChange = async () => {
    switch(playState){
      // Not playing yet, set it up.
      case false:
        const initializedSound  = new Audio.Sound();
        initializedSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)

        await initializedSound.loadAsync(item.audioFile, {shouldPlay: true})
        setSound(initializedSound)
        setPlayState('playing')
        break;

      // Currently playing, pause it.
      case 'playing':
        sound.pauseAsync();
        setPlayState('paused');
        break;
      // Currently paused, resume playing.
      case 'paused':
        sound.playAsync();
        setPlayState('playing')
        break;
    }
  }

  return(
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Audio Player</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => handleChange()}>{playState === 'playing' ? 'Pause' : 'Play'}</Button>
        <Button onPress={() => setFullTextVisible(!fullTextVisible)}>{fullTextVisible ? "Hide" : "Show"} Text</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.lightBlue,
    marginTop: 5,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Whitney-Black',
    fontSize: 22,
    marginBottom: 5
  }
})

export default AudioPlayer
