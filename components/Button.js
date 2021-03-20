import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import colors from '../assets/colors'

const Button = ({children, onPress}) => {
  return(
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.yellow,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Whitney-Semibold',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
  }
})


export default Button;
