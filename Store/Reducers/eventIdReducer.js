

function setEventId(state = {eventId:0},action){
  let nextState
  switch (action.type) {
    case 'INCREASE_ID':
        nextState = {
          ...state,
          eventId: action.value+1
        }
      return nextState || state
    default:
      return state
  }
}

export default setEventId
