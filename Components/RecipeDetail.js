import React from 'react'
import {StyleSheet, View, Image,ImageBackground,Text,TouchableOpacity,ScrollView, Dimensions} from 'react-native'
import StepList from './StepList'
import Modal from 'react-native-modal'
import IngredientsList from './IngredientsList'
import {getRecipeInstructionsFromApi,getImageFromApi,getRecipeInfoFromApi,getRecipeIngredientsFromApi} from '../API/spoonacularApi'

class RecipeDetail extends React.Component{

  constructor(props){
    super(props)
    this.state={
      instructions:[],
      info : [],
      isModalVisible:false,
      ingredients:[]
    }
    this._loadRecipe = this._loadRecipe.bind(this)
    this._closeModal = this._closeModal.bind(this)
  }
  _loadRecipe(){
    getRecipeInstructionsFromApi(this.props.navigation.state.params.idRecipe).then(data => {
      this.setState({
        instructions:data[0].steps
      })
    })
    getRecipeInfoFromApi(this.props.navigation.state.params.idRecipe).then(data => {
      this.setState({
        info:data
      })
    })
    getRecipeIngredientsFromApi(this.props.navigation.state.params.idRecipe).then(data => {
      this.setState({
        ingredients:data.ingredients
      })
    })
  }

  _openModal(){
    this.setState({
      isModalVisible: true
    })
  }

  _closeModal(){
    this.setState({
      isModalVisible: false
    })
  }


  componentDidMount(){
    //getRecipeInstructionsFromApi('519247').then(data => console.log())
    //getRecipeInfoFromApi('519247').then(data => console.log())
    this._loadRecipe();

  }


  render(){
    //console.log("log state:"+JSON.stringify(this.state.ingredients))
    console.log(this.props.navigation)
    return(
      <View style={styles.main_container}>
        <ImageBackground
          style={styles.image_container}
          source={{uri: getImageFromApi(this.props.navigation.state.params.idRecipe)}}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'left'}}>
            <Text style={styles.title_text}>{this.state.info.title} </Text>
          </View>
        </ImageBackground>
        <View style={styles.recipe_container}>
          <View style={styles.info_container}>
            <View style={styles.people_container}>
              <Image
                style={styles.icon}
                source={require('../Images/icon_people.png')}
              />
              <Text>{this.state.info.servings} people</Text>
            </View>
            <View style={styles.time_container}>
              <Image
                style={styles.icon}
                source={require('../Images/icon_time.png')}
              />
              <Text>{this.state.info.readyInMinutes} min</Text>
            </View>
          </View>
          <View style={styles.recipe_container}>
            <TouchableOpacity style={styles.button} onPress={()=> this._openModal()}>
              <Text style={styles.ingredients_text}> See ingredients</Text>
            </TouchableOpacity>
            <StepList style={styles.steplist_container}
                instructions={this.state.instructions}
            />
          </View>
        </View>
        <Modal animationIn="slideInUp" animationOut="slideOutDown"
                isVisible={this.state.isModalVisible} style={styles.popup} >
            <View style={styles.header_container}>
              <TouchableOpacity
                style={styles.icon_container}
                onPress = {()=> this._closeModal()}>
                <Image
                  style={styles.icon}
                  source={require('../Images/icon_chevron.png')}
                />
              </TouchableOpacity>
              <View style={styles.text_container}>
                <Text style={styles.list_title}>Ingredients</Text>
              </View>
            </View>
            <IngredientsList closeModal={this._closeModal} ingredients={this.state.ingredients}/>
        </Modal>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  main_container:{
    flex:1
  },
  image_container: {
    flex:2,
  },
  recipe_container:{
    flex: 4
  },
  info_container:{
    flex:0.4,
    flexDirection: 'row'
  },
  time_container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  people_container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  recipe_container:{
    flex: 3,
    alignItems:'stretch',
    backgroundColor: '#EFEAEA',
  },
  popup:{

  },
  button:{
    marginTop:20,
    height: 50,
    backgroundColor: '#e91e63',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',

  },
  icon:{
    height:30,
    width:30
  },
  title_text:{
    justifyContent:'flex-end',
    textAlign:'left',
    fontWeight : 'bold',
    fontSize : 30,
    color : '#FFFFFF',
  },
  ingredients_text:{
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 15,
    color : '#ffffff',
  },
  header_container:{
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  icon_container:{
    flex: 0.2,
    justifyContent:'center',
    alignItems:'center'
  },
  text_container:{

    justifyContent:'center',
    flex:1.1,
  },
  list_title:{
    textAlign:'center',
    color : '#e91e63',
    fontWeight : 'bold',
    fontSize : 15,
  }

})

export default RecipeDetail
