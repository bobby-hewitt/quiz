export const playerSetRoom = (payload) => {
  return dispatch => {
    dispatch({
      type: 'PLAYER_SET_ROOM',
      payload
    })
  }
}

export const playerSetUsers = (payload) => {
  return dispatch => {
    dispatch({
      type: 'PLAYER_SET_USERS',
      payload
    })
  }
}


export const toggleUserSelect = (payload) => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_USER_SELECT',
      payload
    })
  }
}



