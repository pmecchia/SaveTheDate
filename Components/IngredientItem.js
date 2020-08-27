import React from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

class IngredientItem extends React.Component{

  constructor(props){
    super(props)
    this.state={
      isCheck:false
    }
  }
  _displayCheckImage(){
    var sourceImage = require('../Images/icon_round.png')
    if(this.state.isCheck == true){
      sourceImage = require('../Images/icon_checked.png')
    }
    return(
      <Image
        source={sourceImage}
        style={styles.icon}
      />
    )
  }




  _toggleCheck(){
    this.setState({
      isCheck:!this.state.isCheck
    })
  }


  render(){
    return(
      <View style={this.state.isCheck ? [styles.item_container,{opacity:0.4}] : styles.item_container}>
        <TouchableOpacity style={styles.icon_container}
          onPress={()=> this._toggleCheck()}>
            {this._displayCheckImage()}
        </TouchableOpacity>
        <View style={styles.text_container}>
          <Text style={styles.text_ingredient}>{this.props.ingredient}</Text>
          <Text style={styles.text_quantity}> {this.props.quantity} {this.props.metric}</Text>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  item_container:{
    flexDirection:'row',
    borderTopWidth:0.6,
    borderBottomWidth:0.6,
    borderTopColor: '#EFEAEA',
    borderBottomColor: '#EFEAEA',
    height: 60

  },
  icon_container:{
    flex: 0.2,
    justifyContent:'center',
    alignItems:'center'
  },
  text_container:{
    flexDirection:'column',
    flex:1.1,
    justifyContent:'center',
  },
  icon:{
    height: 30,
    width: 30
  },
  text_ingredient:{
  },
  text_quantity:{
    color: '#CCCCCC',
  }

})

export default IngredientItem
