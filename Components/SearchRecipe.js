import React from 'react'
import {StyleSheet,TextInput,Button, View,ActivityIndicator} from 'react-native'
import {getRecipeFromApiWithSearchedText} from '../API/spoonacularApi'
import RecipesList from './RecipesList'

class SearchRecipe extends React.Component{

  constructor(props){
    super(props)
    this.offset=0
    this.state = {
      isLoading: false,
      recipes: []
    }
    this._loadRecipes = this._loadRecipes.bind(this)
  }
  _searchRecipes(){
    this.offset=0
    this.setState({
      recipes:[],
    }, () => {
      this._loadRecipes()
    })
  }

  _searchTextInputChanged(text) {
    this.searchedText=text
  }

  _displayLoading() {
    if(this.state.isLoading){
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
  }

  _loadRecipes() {
    if(this.searchedText.length >0){
      this.setState({isLoading : true})
      //getRecipeFromApiWithSearchedText(this.searchedText).then(data => console.log())
      getRecipeFromApiWithSearchedText(this.searchedText,this.offset).then(data => {
        this.offset=this.offset+100
        this.setState({
          recipes : [...this.state.recipes, ...data.results],
          isLoading : false
        })
      })
    }
  }

  render(){
    //console.log("log state:"+JSON.stringify(this.state.recipes))
    return(
      <View style={styles.main_container}>
        <TextInput style={styles.textinput}
          placeholder='Name of the Recipe'
          onChangeText={(text)=> this._searchTextInputChanged(text)}
          onSubmitEditing ={()=> this._searchRecipes()}
        />
        <Button title='Recherche' onPress={() => this._searchRecipes()}/>
        <RecipesList
          recipes={this.state.recipes}
          navigation={this.props.navigation}
          loadRecipes={this._loadRecipes}
          offset={this.offset}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position : 'absolute',
    left : 0,
    right : 0,
    bottom : 0,
    top : 200,
    justifyContent : 'center',
    alignItems : 'center'
  }
})

export default SearchRecipe
