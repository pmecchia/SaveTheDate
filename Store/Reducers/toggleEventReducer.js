
initialState={eventList:[]}

function toggleEvent(state = initialState,action){
  let nextState
  switch (action.type) {
    case 'ADD_EVENT':
        nextState = {
          ...state,
          eventList: [...state.eventList, action.value],
        }
      return nextState || state
    case 'DELETE_EVENT':
        const eventIndex = state.eventList.findIndex(item => item.eventId === action.value)
        console.log("eventIndex: "+eventIndex)
        console.log("action value: "+JSON.stringify(action.value))
        nextState = {
          ...state,
          eventList: state.eventList.filter((item, index) => index !== eventIndex)
        }
      return nextState || state
    default:
      return state

  }
}

export default toggleEvent
