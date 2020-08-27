import React from 'react'
import {StyleSheet,Text,FlatList,View} from 'react-native'
import StepItem from './StepItem'

class StepList extends React.Component{

  constructor(props){
    super(props)
    this.state={
      instructions:[]
    }
  }

  render() {
    //console.log(this.props.instructions)
    return (
      <FlatList
        style={styles.list}
        data={this.props.instructions}
        //keyExtractor={(item) => item.steps[0].number.toString()}
        renderItem={({item}) =>
          <StepItem
            number = {item.number}
            step={item.step}
          />}
      />
    )
  }
}

const styles = StyleSheet.create({
  list:{
    margin: 20,
    borderRadius: 10,
  }
})

export default StepList
