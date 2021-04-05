import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import { ListItem, Avatar, Text } from 'react-native-elements'
import * as exhibits from '../assets/exhibits'

const ExhibitsScreen = ({navigation}) => {
  const exhibitKeys = Object.keys(exhibits)

  const renderItem = ({item}) => {
    const currentItem = exhibits[item]

    return(
      <ListItem bottomDivider onPress={() => navigation.navigate('Exhibit', {
        item: currentItem
      })}>
        <Avatar
          size="large"
          source={currentItem.heroImage}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.itemTitle}>{currentItem.title}</ListItem.Title>

        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
    )
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={exhibitKeys}
        keyExtractor={item => item[0]}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default ExhibitsScreen
