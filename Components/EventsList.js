import React from 'react'
import {StyleSheet,View,FlatList,Text,TouchableOpacity,Image} from 'react-native'
import EventItem from './EventItem'
import { connect } from 'react-redux'
import equal from 'fast-deep-equal'
import Swipeable from 'react-native-swipeable'


class EventsList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isFiltering:this.props.isFiltering,
      isSwipe : false
    }
  }

  componentDidUpdate(prevProps){

    if(!equal(this.props.isFiltering, prevProps.isFiltering)){
      this.setState({
        isFiltering : this.props.isFiltering
      })
    }
  }

  _dataUse(){
    if(this.state.isFiltering){
      return this.props.filterList}
    else{
      return this.props.eventList
    }
  }
  _deleteEvent(itemId){
    console.log("DELETE_EVENT : "+ JSON.stringify(itemId))
    const action = {type: "DELETE_EVENT", value:itemId}
    this.props.dispatch(action)
  }

  _rightButton(itemId){
    return([
      <TouchableOpacity style={styles.rightButtons} onPress={()=> this._deleteEvent(itemId)}>
        <View style={styles.delete_container}>
          <Image
            style={styles.icon}
            source={require('../Images/icon_delete.png')}
          />
        </View>
      </TouchableOpacity>
    ]
    )
  }


  render(){


    console.log("flatlist: "+ JSON.stringify(this.props.isFiltering))
    return(
      <FlatList
        data={this._dataUse()}
        keyExtractor={(item) => item.eventId.toString()}
        renderItem={({item}) =>
            <Swipeable
              rightButtons={this._rightButton(item.eventId)}
              >
              <EventItem
              event={item}
              swipeAction={this.state.isSwipe}
              />
            </Swipeable>
        }
      />
    )
  }
}

const styles=StyleSheet.create({
  delete_container:{
    backgroundColor:'#E74C3C',
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    borderTopRightRadius:15,
    borderBottomRightRadius:15

  },
  rightButtons:{
    flex:1,
    marginBottom:20,
    marginRight:220,

  },
  icon:{
    height:50,
    width:50,
    marginLeft:10
  }
})

const mapStateToProps = (state) => {
  console.log("redux1: "+ JSON.stringify(state.toggleEvent.eventList))
  return {
    eventList: state.toggleEvent.eventList,
    filterList: state.filterEvent.filterList
  }
}

export default connect(mapStateToProps)(EventsList)
