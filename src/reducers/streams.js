import { CLEAR_WEBSOCKET, SET_STREAMS } from "../actions/webSocket"

export default (state = [], action = {}) => {
  switch (action.type) {
    case CLEAR_WEBSOCKET:
      return []
    case SET_STREAMS:
      return action.payload
    default:
      return state
  }
}