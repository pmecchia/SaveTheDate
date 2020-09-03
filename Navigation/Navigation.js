import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer} from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import SearchRecipe from '../Components/SearchRecipe'
import RecipeDetail from '../Components/RecipeDetail'
import CreateEvent from '../Components/CreateEvent'
import Events from '../Components/Events'
import {StyleSheet,Image} from 'react-native'
import React from 'react'


const SearchStackNavigator = createStackNavigator({
  Events:{
    screen:Events
  }
})

const CreateStackNavigator = createStackNavigator({

  CreateEvent:{
    screen: CreateEvent
  },
  SearchRecipe: {
    screen: SearchRecipe,
  },

  RecipeDetail: {
    screen : RecipeDetail
  },
})




const EventsTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
          return(
            <Image
              source={require('../Images/icon_search.png')}
              style={styles.icon}
            />
          )
        }
      }
    },
    Create: {
      screen: CreateStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return(
            <Image
              source={require('../Images/icon_add.png')}
              style={styles.icon}
            />
          )
        }
      }
    }


  },
  {
    tabBarOptions: {
      style:{height: 60},
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
  }
)
const styles = StyleSheet.create({
  icon : {
    width : 30,
    height : 30
  }
})

export default createAppContainer(EventsTabNavigator)
