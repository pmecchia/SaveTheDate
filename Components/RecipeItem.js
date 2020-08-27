
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

class RecipeItem extends React.Component {

  render() {
    const {recipe, displayDetailForRecipe,selectRecipe} = this.props
    return (
      <View style={styles.main_container} >
        <Image
          style={styles.image}
          source={{uri: recipe.image}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{recipe.title}</Text>
          </View>
          <TouchableOpacity style={styles.description_container} onPress={()=> selectRecipe(recipe.title)}>
            <Text style={styles.description_text}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.date_container} onPress={()=> displayDetailForRecipe(recipe.id)}>
            <Text style={styles.date_text}>See details</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  favorite_image:{
    width:20,
    height:20,
    marginRight : 5
  },
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 220,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 10
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})
export default RecipeItem
