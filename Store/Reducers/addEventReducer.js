
initialState={eventList:[],eventDateList:[]}

function addEvent(state = initialState,action){
  let nextState
  switch (action.type) {
    case 'ADD_EVENT':
        nextState = {
          ...state,
          eventList: [...state.eventList, action.value],
          eventDateList:[...state.eventDateList, action.value.chosenDate]
        }
      return nextState || state
    default:
      return state

  }
}

export default addEvent
