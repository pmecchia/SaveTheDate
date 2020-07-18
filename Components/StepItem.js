import React from 'react'
import {Text,StyleSheet,View} from 'react-native'

class StepItem extends React.Component{
  render(){
    return(
      <View style={styles.text_container}>
        <Text style={styles.number_text}>1</Text>
        <Text style={styles.description_text}> Premiere Instruction hjbhjgghhjhhhhhjjjhjjjkkjjkjjkjk</Text>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  text_container:{
    flexDirection:'row',
    backgroundColor:'#ffffff',
    marginBottom:2
  },
  number_text:{
    color: '#EFEAEA',
    width: 40,
    textAlign:'center',
    fontSize:20
  },
  description_text:{
    flex:1
  }

})

export default StepItem
