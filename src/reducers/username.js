import { CLEAR_WEBSOCKET, SET_USERNAME } from "../actions/webSocket"

export default (state = "", action = {}) => {
  switch (action.type) {
    case CLEAR_WEBSOCKET:
      return ""
    case SET_USERNAME:
      return action.payload
    default:
      return state
  }
}