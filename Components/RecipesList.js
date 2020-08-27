import React from 'react'
import {StyleSheet,FlatList,Text,View} from 'react-native'
import RecipeItem from './RecipeItem'

class RecipesList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      recipes: []
    }

  }
  _displayDetailForRecipe = (idRecipe) => {
    this.props.navigation.navigate("RecipeDetail", {idRecipe:idRecipe})
  }

  _selectRecipe = (titleRecipe) =>{
    console.log("Display recipe name " + titleRecipe)

    this.props.navigation.navigate("CreateEvent", {titleRecipe:titleRecipe})
  }

  render(){
    return(

        <FlatList
          data={this.props.recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>
              <RecipeItem
              recipe={item}
              displayDetailForRecipe = {this._displayDetailForRecipe}
              selectRecipe = {this._selectRecipe}
              />
          }
          onEndReachedThreshold = {0.2}
          onEndReached={()=> {
          if (this.props.offset < 900) {
            this.props.loadRecipes()
            }
          }}
        />
    )
  }
}

const styles = StyleSheet.create({
  list:{
    flex: 1
  }
})


export default RecipesList
