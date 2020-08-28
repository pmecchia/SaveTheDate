import React from 'react'
import {StyleSheet, View, Image, TextInput,FlatList,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'


class Events extends React.Component{

  constructor(props){
    super(props)
    this.state = {
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText=text
  }

  render(){
    console.log("log evenlist:"+JSON.stringify(this.props.eventList));
    return(
      <View style={styles.main_container}>
        <View style={styles.search_container}>
          <TextInput style={styles.textinput}
            placeholder='Find Event'
            onChangeText={(text)=> this._searchTextInputChanged(text)}
            //onSubmitEditing ={()=> }
          />
        </View>
        <View style={styles.list_container}>
        </View>
        <View style={styles.add_event_container}>
          <TouchableOpacity
          style={styles.icon_container}
          onPress = {()=> this.props.navigation.navigate("CreateEvent")}>
            <Image
              style={styles.icon}
              source={require('../Images/icon_add.png')}
            />
          </TouchableOpacity>
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
    flex:0.2
  },
  list_container:{
    flex:0.6
  },
  add_event_container:{
    flex:0.2
  },
  icon:{
    height:30,
    width:30
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
  return {
    eventList: state.eventList
  }
}

export default connect(mapStateToProps)(Events)
