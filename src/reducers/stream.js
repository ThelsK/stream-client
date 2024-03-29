import { CLEAR_STREAM, SET_STREAM } from "../actions/stream"

export default (state = null, action = {}) => {
  switch (action.type) {
    case CLEAR_STREAM:
      return null
    case SET_STREAM:
      return action.payload
    default:
      return state
  }
}