import React from 'react'
import {StyleSheet,View, Text,Image,} from 'react-native'

class EventItem extends React.Component{
  render(){

    return(
        <View style={styles.main_container}>
          <View style={styles.title_container}>
            <Image
              style={styles.icon}
              source={require('../Images/icon_circle.png')}
            />
            <Text style={styles.title_text}> {this.props.event.recipe}</Text>
          </View>
          <View style={styles.info_container}>
              <Text>{this.props.event.chosenDate} {this.props.event.invitees}</Text>
          </View>
        </View>
    )
  }
}

const styles=StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:'white',
    borderRadius:15,
    height:100,
    justifyContent:'center',
    marginBottom:20

  },
  title_container:{
    marginLeft:10,
    flexDirection: 'row',

  },
  info_container:{
    flexDirection: 'row',
    marginLeft:20
  },
  title_text:{
    fontWeight: 'bold',
    marginBottom:5

  },
  icon:{
    height:10,
    width:10
  }
})

export default EventItem
