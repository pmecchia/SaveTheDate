import React from 'react'
import {StyleSheet,View,FlatList} from 'react-native'
import EventItem from './EventItem'
import { connect } from 'react-redux'
import equal from 'fast-deep-equal'


class EventsList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isFiltering:this.props.isFiltering
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

  render(){
    console.log("flatlist: "+ JSON.stringify(this.props.isFiltering))
    return(
      <FlatList
        data={this._dataUse()}
        keyExtractor={(item) => item.eventId.toString()}
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

const mapStateToProps = (state) => {
  console.log("redux1: "+ JSON.stringify(state.addEvent.eventList))
  return {
    eventList: state.addEvent.eventList,
    filterList: state.filterEvent.filterList
  }
}

export default connect(mapStateToProps)(EventsList)
