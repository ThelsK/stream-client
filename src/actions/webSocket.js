import { SET_MESSAGE } from "./message"

export const CLEAR_WEBSOCKET = "CLEAR_WEBSOCKET"
export const SET_WEBSOCKET = "SET_WEBSOCKET"
export const SET_USERNAME = "SET_USERNAME"
export const SET_DEVICENAME = "SET_DEVICENAME"
export const SET_STREAMS = "SET_STREAMS"
export const SET_SIGNAL = "SET_SIGNAL"

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
  if (data.message) {
    dispatch({
      type: SET_MESSAGE,
      payload: data.message,
    })
  }

  if (data.streams) {
    dispatch({
      type: SET_STREAMS,
      payload: data.streams,
    })
  }

  switch (data.type) {
    case "message":
      return

    case "streams":
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

    case "offer":
    case "answer":
    case "candidate":
      dispatch({
        type: SET_SIGNAL,
        payload: data,
      })
      return

    default:
      console.error("Unknown data:", data)
  }
}