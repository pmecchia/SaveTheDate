import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer} from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import SearchRecipe from '../Components/SearchRecipe'
import RecipeDetail from '../Components/RecipeDetail'
import CreateEvent from '../Components/CreateEvent'
import Events from '../Components/Events'


const SearchStackNavigator = createStackNavigator({

  Events:{
    screen:Events
  },

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

export default createAppContainer(SearchStackNavigator)
