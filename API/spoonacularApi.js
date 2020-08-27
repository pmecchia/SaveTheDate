
const API_TOKEN = "411ff546b7374ce68c5ddc32117b36e1";

export function getRecipeFromApiWithSearchedText (text,offset) {
  const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + API_TOKEN + '&query=' + text+'&number=100&offset='+offset
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getRecipeInstructionsFromApi (id) {
  const url = 'https://api.spoonacular.com/recipes/' + id + '/analyzedInstructions?apiKey=' + API_TOKEN + '&stepBreakdown=true'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
 }
 export function getImageFromApi(id){
   return 'https://spoonacular.com/recipeImages/'+id+'-312x231.jpg'
 }

 export function getRecipeInfoFromApi (id) {
   const url = 'https://api.spoonacular.com/recipes/'+ id + '/information?apiKey=' + API_TOKEN + '&includeNutrition=false'
   return fetch(url)
     .then((response) => response.json())
     .catch((error) => console.error(error))
 }

 export function getRecipeIngredientsFromApi (id) {

   const url = 'https://api.spoonacular.com/recipes/'+ id +'/ingredientWidget.json?apiKey=' + API_TOKEN
   return fetch(url)
     .then((response) => response.json())
     .catch((error) => console.error(error))
 }
