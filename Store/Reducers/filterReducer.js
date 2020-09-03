const initialState = { filterList: []}

function filterEvent(state = initialState,action){
  let nextState
  switch (action.type) {
    case 'RECIPE_FILTER':
      //const eventIndex = action.value.filter(item => item.recipe === text)
      //console.log("debug: "+ JSON.stringify(action.value.filter(obj => (obj.recipe === 'Chicken'))))
      //console.log("debug: "+ JSON.stringify(action.text))
      const recipeFilter=action.value.filter(obj => (obj.recipe.includes(action.text)))
      nextState = {
        ...state,
        filterList: recipeFilter
      }
      return nextState || state
    case 'DATE_FILTER':
      const dateFilter=action.value.filter(obj => (obj.chosenDate.includes(action.text)))
      nextState = {
        ...state,
        filterList: dateFilter
      }
      return nextState || state
    case 'INVITEES_FILTER':
      const iniviteesFilter=action.value.filter(obj => (obj.invitees.includes(action.text)))
      nextState = {
        ...state,
        filterList: iniviteesFilter
      }
      return nextState || state
    default:
      return state

  }
}

export default filterEvent
