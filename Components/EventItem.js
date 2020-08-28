import React from 'react'
import {StyleSheet,View, Text} from 'react-native'


class EventItem extends React.Component{
  render(){
    return(
      <View style={styles.main_container}>
        <View style={styles.title_container}
          <Text style={styles.title_text}>Recette</Text>
        </View>
        <View style={styles.info_container}>
          <Text>Date</Text>
          <Text>Invitees</Text>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  main_container:{
    flex:1,
  },
  title_container:{

  },
  info_container:{
    flexDirection: 'row',
  },
  title_text:{
    fontWeight: 'bold',
  }
})

export default EventItem
