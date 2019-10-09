import { CLEAR_WEBSOCKET, SET_WEBSOCKET } from "../actions/webSocket"

export default (state = null, action = {}) => {
  switch (action.type) {
    case CLEAR_WEBSOCKET:
      return null
    case SET_WEBSOCKET:
      return action.payload
    default:
      return state
  }
}