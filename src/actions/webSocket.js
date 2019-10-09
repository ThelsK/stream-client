export const CLEAR_WEBSOCKET = "CLEAR_WEBSOCKET"
export const SET_WEBSOCKET = "SET_WEBSOCKET"
export const SET_USERNAME = "SET_USERNAME"
export const SET_DEVICENAME = "SET_DEVICENAME"

export const clearWebSocket = () => dispatch =>
  dispatch({
    type: CLEAR_WEBSOCKET,
  })

export const setWebSocket = webSocket => dispatch =>
  dispatch({
    type: SET_WEBSOCKET,
    payload: webSocket,
  })

export const receiveMessage = data => dispatch => {
  switch (data.type) {

    case "message":
      return

    case "login":
      dispatch({
        type: SET_USERNAME,
        payload: data.username,
      })
      return

    case "device":
      dispatch({
        type: SET_DEVICENAME,
        payload: data.devicename,
      })
      return

    default:
      console.error("Unknown data received:", data)
  }
}