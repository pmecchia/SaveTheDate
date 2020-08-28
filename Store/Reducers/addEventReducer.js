
initialState={eventList:[]}

function addEvent(state = initialState,action){
  let nextState
  switch (action.type) {
    case 'ADD_EVENT':
        nextState = {
          ...state,
          eventList: [...state.eventList, action.value]
        }
      return nextState || state
    default:
      return state

  }
}

export default addEvent
