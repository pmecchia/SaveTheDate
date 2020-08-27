import React from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import {View,Image,TouchableOpacity,Text,StyleSheet} from 'react-native'
import moment from 'moment'
import equal from 'fast-deep-equal'

class CreateEvent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isVisible:false,
      chosenDate:moment().format('DD/MM/YYYY'),
      invitees:'None >',
      recipe:'None >',
    }
    this._handlePicker = this._handlePicker.bind(this)
    this._closePicker = this._closePicker.bind(this)
  }

  componentDidUpdate(prevProps){
    if(!equal(this.props.navigation.state.params, prevProps.navigation.state.params)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
  {
    this._displayRecipe()
  }

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
      chosenDate: moment(date).format('DD/MM/YYYY')
    })
  }




  render(){
    console.log("Test " + this.props.navigation.state.params)

    return(
      <View style={styles.main_container}>
        <View style={styles.header_container}>
          <TouchableOpacity >
            <Text style={styles.cancel_text}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.text}>New Event</Text>
          <TouchableOpacity >
            <Text style={styles.add_text}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.event_container}>
          <TouchableOpacity style={styles.options_container} onPress={()=> this._openPicker()}>
            <Text style={styles.text}>Date</Text>
            <Text style={styles.text}>{this.state.chosenDate}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={this.state.isVisible}
            onConfirm={this._handlePicker}
            onCancel={this._closePicker}
            mode={'date'}
          />
          <TouchableOpacity style={styles.options_container}>
            <Text style={styles.text}>Invitees</Text>
            <Text style={styles.text}>{this.state.invitees}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options_container}
            onPress={()=> this.props.navigation.navigate("SearchRecipe")}>
            <Text style={styles.text}>Recipe</Text>
            <Text style={styles.text}>{this.state.recipe}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  main_container:{
    flex: 1,
    backgroundColor:'black'
  },
  header_container:{
    flex:0.1,
    backgroundColor:'#413F3F',
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
    marginLeft:5,
    marginRight:5,
    height:70,
    backgroundColor:'#413F3F',
    borderTopWidth:0.6,
    borderBottomWidth:0.6,
    alignItems:'center'
  },
  text:{
    fontSize : 17,
    color:'white',
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
  }
})

export default CreateEvent
