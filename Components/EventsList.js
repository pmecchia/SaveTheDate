import React from 'react'
import {StyleSheet,View,FlatList} from 'react-native'
import EventItem from './Components/EventItem'

class EventList extends React.Component{


  render(){
    return(
      <FlatList
        data={this.props.events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) =>
            <EventItem
            event={item}
            />
        }
      />
    )
  }
}

const styles=StyleSheet.create({

})

export default EventList
