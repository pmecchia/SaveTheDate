import React from 'react'
import {StyleSheet, View, Image,ImageBackground,Text,TouchableOpacity,ScrollView} from 'react-native'

class RecipeDetail extends React.Component{
  render(){
    return(
      <View style={styles.main_container}>
        <ImageBackground
          style={styles.image_container}
          source={{uri: 'https://viehealthy.com/wp-content/uploads/2017/10/recette-healthy-header.png'}}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'left'}}>
            <Text style={styles.title_text}>Nom de la recette </Text>
          </View>
        </ImageBackground>
        <View style={styles.info_container}>
          <View style={styles.people_container}>
            <Image
              style={styles.icon}
              source={require('../Images/icon_people.png')}
            />
            <Text>Nombre de personnes</Text>
          </View>
          <View style={styles.time_container}>
            <Image
              style={styles.icon}
              source={require('../Images/icon_time.png')}
            />
            <Text>Durée</Text>
          </View>
        </View>
        <View style={styles.recipe_container}>
          <View style={styles.button}>
            <Text style={styles.ingredients_text}> Voir les ingrédients</Text>
          </View>
          <ScrollView style={styles.scrollview_container}>
            <Text> Instruction 1 </Text>
          </ScrollView>
        </View>
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
  info_container:{
    height: 100,
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
  scrollview_container:{
    backgroundColor: '#E67E22',
    borderRadius: 10,
    marginTop:20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom:30

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
    color : '#000000',
  },
  ingredients_text:{
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 15,
    color : '#ffffff',
  },


})

export default RecipeDetail
