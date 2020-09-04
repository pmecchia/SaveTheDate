import React from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import {View,Image,TouchableOpacity,Text,StyleSheet} from 'react-native'
import moment from 'moment'
import equal from 'fast-deep-equal'
import { connect } from 'react-redux'

class CreateEvent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      eventId: 0,
      isVisible:false,
      chosenDate:moment().format('YYYY-MM-DD'),
      invitees:'None >',
      recipe:'None >',
    }
    this._handlePicker = this._handlePicker.bind(this)
    this._closePicker = this._closePicker.bind(this)
  }

  componentDidUpdate(prevProps){

    console.log("componentDidUpdate : ")
    console.log(this.props.eventId)
    if(!equal(this.props.eventId, prevProps.eventId)){
      this.setState({
        eventId : this.props.eventId
      })
    }


    if(!equal(this.props.navigation.state.params, prevProps.navigation.state.params)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this._displayRecipe()
    }
  }

  _addEvent() {
    console.log("ADD EVENT : "+ JSON.stringify(this.state))
    const action_1 = {type: "ADD_EVENT", value:this.state}
    const action_2 = { type: "INCREASE_ID", value: this.props.eventId }

    this.props.dispatch(action_1)
    this.props.dispatch(action_2)
    this.props.navigation.navigate("Events")
  }

  _displayRecipe(){
    if(this.props.navigation.state.params && this.props.navigation.state.params.titleRecipe){
      this.setState({
        recipe:this.props.navigation.state.params.titleRecipe
      })
    }
    else {
      this.setState({
        recipe:'None >'
      })
    }
  }

  _openPicker(){
    this.setState({
      isVisible:true
    })
  }

  _closePicker(){
    this.setState({
      isVisible:false
    })
  }

  _handlePicker(date){
    this.setState({
      isVisible:false,
      chosenDate: moment(date).format('YYYY-MM-DD')
    })
  }




  render(){
    //console.log('INFO:'+JSON.stringify(this.state));

    return(
      <View style={styles.main_container}>
        <View style={styles.header_container}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Events")}>
            <Text style={styles.cancel_text}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this._addEvent()}>
            <Text style={styles.add_text}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.event_container}>
          <TouchableOpacity style={styles.options_container} onPress={()=> this._openPicker()}>
            <Text style={styles.text}>Date</Text>
            <Text style={styles.text}>{this.state.chosenDate}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isDarkModeEnabled={false}
            style={styles.dateTimePicker}
            isVisible={this.state.isVisible}
            onConfirm={this._handlePicker}
            onCancel={this._closePicker}
            mode={'date'}
          />
          <TouchableOpacity style={styles.options_container}>
            <Text style={styles.text}>Invitees</Text>
            <Text style={this.state.invitees==='None >' ? [styles.text,{color:'#EFEAEA'}] : [styles.text,{color:'#e91e63'}]}>{this.state.invitees}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options_container}
            onPress={()=> this.props.navigation.navigate("SearchRecipe")}>
            <Text style={styles.text}>Recipe</Text>
            <Text style={this.state.recipe==='None >' ? [styles.text,{color:'#EFEAEA'}] : [styles.text,{color:'#e91e63'}]}>{this.state.recipe}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  main_container:{
    flex: 1,
    backgroundColor: '#EFEAEA'
  },
  header_container:{
    flex:0.1,
    backgroundColor:'#EFEAEA',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  },

  event_container:{
    flex:1,
    justifyContent:'center',
  },
  options_container:{
    flexDirection: 'row',
    justifyContent:'space-between',
    borderRadius:20,
    marginLeft:5,
    marginRight:5,
    marginBottom:10,
    height:70,
    backgroundColor:'white',
    alignItems:'center'
  },
  text:{
    fontSize : 17,
    color:'black',
    marginLeft:15,
    marginRight:15,
  },
  cancel_text:{
    marginLeft:15,
    color:'red',
    fontSize:17
  },
  add_text:{
    marginRight:15,
    fontSize:17,
    color:'grey'
  },
  dateTimePicker:{

  }
})

const mapStateToProps = (state) => {
  console.log("redux2: "+ state.setEventId.eventId)
  return {
    eventId: state.setEventId.eventId

  }
}

export default connect(mapStateToProps)(CreateEvent)
