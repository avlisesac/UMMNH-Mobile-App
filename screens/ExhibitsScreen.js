import React from 'react'
import {
  FlatList,
  SafeAreaView,
  SectionList,
  StyleSheet,
  View
} from 'react-native'
import { ListItem, Avatar, Text } from 'react-native-elements'
import * as exhibits from '../assets/exhibits'
import colors from '../assets/colors'

const ExhibitsScreen = ({navigation}) => {
  const exhibitKeys = Object.keys(exhibits)
  const DATA = {
    firstFloor: [],
    secondFloor: [],
    lowerLevel: []
  }

  for(const item of exhibitKeys) {
    const currentExhibit = exhibits[item]

    switch(currentExhibit.location){
      case '1st Floor':
        DATA.firstFloor = [...DATA.firstFloor, currentExhibit]
        break;
      case '2nd Floor':
        DATA.secondFloor = [...DATA.secondFloor, currentExhibit]
        break;
      case 'Lower Level':
        DATA.lowerLevel = [...DATA.lowerLevel, currentExhibit]
        break;
    }
  }

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
      <SectionList
        sections={[
          {title: '1st Floor', data: DATA.firstFloor},
          {title: '2nd Floor', data: DATA.secondFloor},
          {title: 'Lower Level', data: DATA.lowerLevel},
        ]}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        // data={exhibitKeys}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <ListItem bottomDivider onPress={() => navigation.navigate('Exhibit', {
            item: item
          })}>
            <Avatar
              size="large"
              source={item.heroImage}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.itemTitle}>{item.title}</ListItem.Title>

            </ListItem.Content>
            <ListItem.Chevron/>
          </ListItem>
          )
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: colors.lightGray,
    padding: 10,
    fontFamily: 'Whitney-Semibold',
    fontSize: 22,
  }
})

export default ExhibitsScreen
