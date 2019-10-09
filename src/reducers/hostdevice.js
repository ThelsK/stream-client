import { CLEAR_WEBSOCKET } from "../actions/webSocket"
import { CLEAR_HOSTDEVICE, SET_HOSTDEVICE } from "../actions/hostdevice"

export default (state = "", action = {}) => {
  switch (action.type) {
    case CLEAR_WEBSOCKET:
      return ""
    case CLEAR_HOSTDEVICE:
      return ""
    case SET_HOSTDEVICE:
      return action.payload
    default:
      return state
  }
}