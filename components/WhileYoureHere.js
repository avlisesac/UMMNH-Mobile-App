import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../assets/colors'

const WhileYoureHere = ({item}) => {
  if(item.whileYoureHere) {
    return(
      <View style={styles.whileYoureHereContainer}>
        <Text style={styles.whileYoureHereTitle}>While You're Here</Text>
        { item.whileYoureHere.map((item, index) => (
          <View key={index}>
            <Text style={styles.whileYoureHereSubtitle}>{item.title}</Text>
            <Text style={styles.whileYoureHereDescription}>{item.description}</Text>
          </View>
        ))}
      </View>
    )
  }
  return(
    <>
    </>
  )
}

const styles = StyleSheet.create({
  whileYoureHereContainer: {
    backgroundColor: colors.pink,
    marginTop: 5,
    padding: 10,
  },
  whileYoureHereTitle: {
    textAlign: 'center',
    fontFamily: 'Whitney-Black',
    fontSize: 22,
  },
  whileYoureHereSubtitle: {
    fontFamily: 'Whitney-Semibold',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center'
  },
  whileYoureHereDescription: {
    marginTop: 5,
  }
})

export default WhileYoureHere
