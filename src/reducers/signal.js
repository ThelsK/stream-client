import { CLEAR_SIGNAL } from "../actions/signal"
import { CLEAR_WEBSOCKET, SET_SIGNAL } from "../actions/webSocket"

export default (state = {}, action = {}) => {
  switch (action.type) {
    case CLEAR_WEBSOCKET:
      return {}
    case CLEAR_SIGNAL:
      return {}
    case SET_SIGNAL:
      return action.payload
    default:
      return state
  }
}