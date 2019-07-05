const initialState = {
  room: null,
  teams: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HOST_SET_ROOM':
      return {
        ...state,
        room: action.payload
      }
    case 'HOST_SET_TEAMS':
      return {
        ...state,
        teams: action.payload
      }
    default:
      return state
  }
}
