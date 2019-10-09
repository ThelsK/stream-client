import { CLEAR_WEBSOCKET, SET_DEVICENAME } from "../actions/webSocket"

export default (state = "", action = {}) => {
  switch (action.type) {
    case CLEAR_WEBSOCKET:
      return ""
    case SET_DEVICENAME:
      return action.payload
    default:
      return state
  }
}