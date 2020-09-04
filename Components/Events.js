import React from 'react'
import {StyleSheet, View, Image, TextInput,FlatList,TouchableOpacity,Text,Picker} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import {Calendar} from 'react-native-calendars'
import ModalSelector from 'react-native-modal-selector'
import EventsList from './EventsList'
import { connect } from 'react-redux'
import equal from 'fast-deep-equal'



class Events extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      eventList:this.props.eventList,
      isFiltering:false,
      filterSelected:"Recipe",
      selectorVisible:false,
      daySelected:"",
      daySyntax:"",
      eventDateList:[],
      dateMarked:null,

    }
  }
  componentDidUpdate(prevProps) {
    if(!equal(this.props.eventList, prevProps.eventList)){
      this._markDates();
    }

}

  _onDayPress(day){

    this.setState({daySelected:day.dateString})
    if (day.day<10){
      var daySyntax="0"+ day.day
    }else {
      var daySyntax=day.day
    }
    if (day.month <10){
      var monthSyntax="0"+ day.month
    }else {
      var monthSyntax=day.month
    }
    this.searchDate=(day.year)+"-"+monthSyntax+"-"+daySyntax
    this._searchFilter()
  };


  _searchTextInputChanged(text) {
    this.searchedText=text
  }

  _searchFilter(text){

    const action_recipe = { type: "RECIPE_FILTER", value: this.props.eventList,text:this.searchedText }
    const action_invitees = { type: "INVITEES_FILTER", value: this.props.eventList,text:this.searchedText }
    const action_date = { type: "DATE_FILTER", value: this.props.eventList,text:this.searchDate }


    if(this.state.filterSelected==='Recipe'){
      this.props.dispatch(action_recipe)
      if(this.searchedText.length >0){
        this.setState({isFiltering : true})
      }else{
        this.setState({isFiltering : false})
      }
    }
    else if (this.state.filterSelected==='Invitees') {
      this.props.dispatch(action_invitees)
      if(this.searchedText.length >0){
        this.setState({isFiltering : true})
      }else{
        this.setState({isFiltering : false})
      }
    }
    else{
      this.props.dispatch(action_date)
      this.setState({isFiltering : true})
    }
  }

  _markDates(){
    const eventMark = {dotColor: 'red',marked: true}
    const eventSelection = {selected: true,disableTouchEvent: true,selectedColor: '#e91e63',selectedTextColor: 'white',}
    var obj = this.props.eventDateList.reduce((c, v) => Object.assign(c, {[v]: eventMark} ), {});
    this.setState({ dateMarked : obj})
  }



  _renderDate(){

    /*var chosenDate={markedDates,[this.state.daySelected]:{selected: true,
    disableTouchEvent: true,
    selectedColor: '#e91e63',
    selectedTextColor: 'white',
    dotColor: 'red'}}*/


    if (this.state.filterSelected==='Date'){
      return(
        <Calendar
          onDayPress={(day) => this._onDayPress(day)}
          markedDates={this.state.dateMarked}
        />
      )
    }
  }

  render(){
    let index = 0;
        const data = [
            { key: index++, label: 'Recipe' },
            { key: index++, label: 'Invitees' },
            { key: index++, label: 'Date' },
        ];
    //console.log("log evenlist:"+JSON.stringify(this.state.isFiltering));
    console.log("evenList: "+ JSON.stringify(this.state.dateMarked))

    return(
      <View style={styles.main_container}>
        <View style={styles.search_container}>
          <TextInput style={styles.textinput}
            placeholder={' Find Event by ' + this.state.filterSelected}
            onChangeText={(text)=> this._searchTextInputChanged(text)}
            onSubmitEditing ={(text)=> this._searchFilter(text)}
          />
          <View style={styles.filter_container}>
            <TouchableOpacity
            onPress = {()=> this.setState({selectorVisible:true,isFiltering:false},() => {
      console.log("TEST" + this.state.selectorVisible )})}>
              <Image
                style={{width:20,height:20}}
                source={require('../Images/icon_filter.png')}
              />
            </TouchableOpacity>
            <ModalSelector
              data={data}
              visible={this.state.selectorVisible}
              onChange={(option)=>{ this.setState({filterSelected:option.label,isFiltering:false,selectorVisible:false})}}>
              <TextInput
                        editable={false}
                        placeholder= " Search filter" />
            </ModalSelector>

          </View>
        </View>
        <View style={this.state.filterSelected==='Date' ? [styles.list_container,{flex:0.5}] : [styles.list_container,{flex:0.0}]}>
            {this._renderDate()}
        </View>
        <View style={this.state.filterSelected==='Date' ? [styles.list_container,{flex:0.3}] : [styles.list_container,{flex:0.8}]}>
          <EventsList
            isFiltering={this.state.isFiltering}
          />
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  main_container:{
    flex:1
  },
  search_container:{
    flex:0.15,
  },
  list_container:{
    marginLeft:40,
    marginRight:40,
    marginTop:20,

  },
  filter_container:{
    flexDirection:'row',
    marginLeft:30,
    marginTop:10,
  },
  calendar_container:{
  },
  icon:{
    height:30,
    width:30
  },
  item_picker:{
  flex:1,
  marginRight:40
  },
  textinput:{
    backgroundColor:'white',
    marginLeft:30,
    marginRight:30,
    marginTop:10,
    height:30,
    borderRadius:40
  }
})

const mapStateToProps = (state) => {
  console.log("filter result: "+ JSON.stringify(state.filterEvent.filterList))
  return {
    eventList: state.addEvent.eventList,
    eventDateList: state.addEvent.eventDateList,
    filterList: state.filterEvent.filterList
  }
}

export default connect(mapStateToProps)(Events)
