import React from 'react'
import {StyleSheet,Text,FlatList,View,Dimensions,Image,TouchableOpacity} from 'react-native'
import IngredientItem from './IngredientItem'
class IngredientsList extends React.Component{
  render(){
    return(
        <View style={styles.list}>
          <FlatList
            style={styles.list}
            data={this.props.ingredients}
            //keyExtractor={(item) => item.name.toString()}
            renderItem={({item}) =>
              <IngredientItem
                ingredient = {item.name}
                quantity={item.amount.metric.value}
                metric={item.amount.metric.unit}
              />}
          />
        </View>

    )
  }
}

const styles = StyleSheet.create({
  list:{
    height:Dimensions.get('window').height*2 / 3,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
})

export default IngredientsList
