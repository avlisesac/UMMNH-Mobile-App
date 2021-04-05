import React, {useState} from 'react'
import { Text, View } from 'react-native'

const CustomText = ({children, fontWeight}) => {
  const splitString = children.split('*')
  const finalString = []
  const useFontWeight = fontWeight ? fontWeight : 'normal'

  splitString.forEach((substring, index) => {
    const fontStyle = index % 2 === 0 ? 'normal' : 'italic';

    const textElement = (
      <Text key={index} style={{fontStyle: fontStyle, fontWeight: useFontWeight}}>{substring}</Text>
    )
    finalString.push(textElement)
  })

  return(
    <View>
      <Text>{finalString}</Text>
    </View>
  )
}

export default CustomText
