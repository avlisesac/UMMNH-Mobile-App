import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Linking,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { Avatar, List, ListItem, Text } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import moment from 'moment'
import colors from '../assets/colors'

const Item = ({title, startTime, endTime, description}) => (
  <View>
    <Text h4>{title}</Text>
    <Text >{startTime} - {endTime}</Text>
    <Text>{description}</Text>
  </View>
)

const EventsScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [requestedDate, setRequestedDate] = useState(moment())
  const [selectedDate, setSelectedDate] = useState(moment())
  const [events, setEvents] = useState([])
  const [datePickerVisible, setDatePickerVisible] = useState(false)
  const [error, setError] = useState(null)

  const returnDateForRequest = (date) => {
    const returnDate = moment(date).format('YYYY[-]MM[-]D')
    return returnDate
  }

  const dateForDisplay = (date) => {
    return moment(date).format('MMM Do YYYY')
  }

  const fetchEvents = async () => {
    setIsLoading(true)
    const dateString = returnDateForRequest(requestedDate)

    // Production museum URL
    const fullURL = 'https://events.umich.edu/list/json?filter=sponsors:3445,3825&range=' + dateString + 'to' + dateString

    // Test url - Full University list
    // const fullURL = "https://events.umich.edu/list/json?range=" + dateString + "to" + dateString

    try {
      const response = await fetch(fullURL)
      const data = await response.json();
      const dataArray = Object.entries(data)
      setEvents(dataArray)
      setIsLoading(false)

    } catch (error) {
      setError(error)
      console.log(error)
    }
  }

  const showDatePicker = () => {
    setDatePickerVisible(true);
  }

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  }

  const handleConfirm = (date) => {
    hideDatePicker()
    setRequestedDate(moment(date))
  }

  const handleCancel = () => {
    hideDatePicker()
  }

  useEffect(() => {
    fetchEvents()
  }, [requestedDate])

  const renderItem = ({item}) => {
    const title = (item[1].combined_title.length > 50) ? item[1].combined_title.slice(0, 50) + '...' : item[1].combined_title;;
    const startTime = moment(item[1].time_start, 'HH:mm:ss').format('h:mm A');
    const endTime = moment(item[1].time_end, 'HH:mm:ss').format('h:mm A');
    const description = (item[1].description.length > 140) ? item[1].description.slice(0, 140) + '...' : item[1].description;;
    const eventLink = item[1].permalink;
    const imageThumb = item[1].styled_images.event_thumb ? item[1].styled_images.event_thumb : 'none'

    return(
      <ListItem onPress={() => Linking.openURL(eventLink)} bottomDivider>
        <Avatar rounded source={{uri: imageThumb}} />
        <ListItem.Content>
          <ListItem.Title style={styles.itemTitle}>{title}</ListItem.Title>
          <ListItem.Subtitle style={styles.itemTime}>{startTime + '-' + endTime}</ListItem.Subtitle>
          <ListItem.Subtitle style={styles.itemDescription}>{description}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
    )
  }

  if(error){
    return(
      <View>
        <Text>Error fetching events!</Text>
        <Text>{error.toString()}</Text>
      </View>
    )
  }

  if(isLoading){
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.lightBlue} size="large"/>
      </View>
    )
  }
  return(
    <SafeAreaView>
      <View style={styles.header}>

      <TouchableOpacity onPress={()=> showDatePicker()}>
        <Text h4 style={styles.date}>{dateForDisplay(requestedDate)}</Text>
      </TouchableOpacity>

      { moment(requestedDate).format('MMMM D YYYY') !== moment().format('MMMM D YYYY') &&
        <View style={styles.returnButtonWrapper}>
          <TouchableOpacity onPress={() => setRequestedDate(moment())}>
            <Text style={styles.returnButtonText}>(Return to Today)</Text>
          </TouchableOpacity>
        </View>
      }

      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        date={requestedDate.toDate()}
      />



      </View>

      <FlatList
        data={events}
        keyExtractor={item => item[0]}
        renderItem={renderItem}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    textAlign: 'center',
    fontFamily: 'Whitney-Semibold',
    textDecorationLine: 'underline',
    color: 'blue'
  },
  returnButtonWrapper: {
    marginTop: 10,
    alignItems: 'center'
  },
  returnButtonText: {
    color: 'blue'
  },
  itemTitle: {
    fontFamily: 'Whitney-Black'
  },
  itemTime: {
    fontFamily: 'Whitney-Semibold'
  },
  return : {
    color: colors.lightBlue,
    textAlign: 'center'
  }
})

export default EventsScreen
