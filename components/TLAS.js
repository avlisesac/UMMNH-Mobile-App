import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomText from './CustomText'
import colors from '../assets/colors'

const TLASItem = ({item}) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return(
    <View>
      <TouchableOpacity style={styles.tlasQuestion} onPress={() => setShowAnswer(!showAnswer)}>
        <CustomText fontWeight='800'>{`Q: ${item.q}`}</CustomText>
      </TouchableOpacity>
      { showAnswer &&
        <CustomText>{`A: ${item.a}`}</CustomText>
      }
    </View>
  )
}

const TLAS = ({item}) => (
  <View style={styles.tlasContainer}>
    <Text style={styles.tlasTitle}>Think Like a Scientist</Text>
    <Text style={styles.tlasSubtitle}>(Tap on a question to view the answer)</Text>
    {
      item.tlas.map((item, index) =>(
        <TLASItem key={index} item={item} />
      ))
    }
  </View>
)

const styles = StyleSheet.create({
  tlasContainer: {
    backgroundColor: colors.lightGreen,
    marginTop: 5,
    padding: 10
  },
  tlasTitle: {
    textAlign: 'center',
    fontFamily: 'Whitney-Black',
    fontSize: 22,
  },
  tlasSubtitle: {
    textAlign: 'center',
    fontFamily: 'Whitney-Semibold',
    fontSize: 18,
    marginTop: 5
  },
  tlasQuestion: {
    marginTop: 5,
    marginBottom: 5,
  },
})

export default TLAS
