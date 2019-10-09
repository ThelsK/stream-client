import { CLEAR_WEBSOCKET } from "../actions/webSocket"
import { CLEAR_STATUS, SET_STATUS } from "../actions/status"

export default (state = "", action = {}) => {
  switch (action.type) {
    case CLEAR_WEBSOCKET:
      return ""
    case CLEAR_STATUS:
      return ""
    case SET_STATUS:
      return action.payload
    default:
      return state
  }
}