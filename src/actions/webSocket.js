export const CLEAR_WEBSOCKET = "CLEAR_WEBSOCKET"
export const SET_WEBSOCKET = "SET_WEBSOCKET"

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
    default:
      console.error("Unknown data received:", data)
  }
}

export const receiveError = error => dispatch => {
  console.error("WebSocket Error:", error)
}