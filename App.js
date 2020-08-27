import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecipeDetail from './Components/RecipeDetail'
import CreateEvent from './Components/CreateEvent'
import SearchRecipe from './Components/SearchRecipe'
import Navigation from './Navigation/Navigation'

export default class App extends React.Component {
  render(){
    return (
        <Navigation/>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
