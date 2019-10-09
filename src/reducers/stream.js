import { SET_STREAM, CLEAR_STREAM } from "../actions/stream"

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_STREAM:
      return action.payload
    case CLEAR_STREAM:
      return null
    default:
      return state
  }
}