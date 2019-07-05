export const hostSetRoom = (payload) => {
  console.log('setting host room')
  return dispatch => {
    dispatch({
      type: 'HOST_SET_ROOM',
      payload
    })
  }
}



