import { CLEAR_MESSAGE, SET_MESSAGE } from "../actions/message"
import { messageTimeout } from "../settings"

export default (state = {}, action = {}) => {
  switch (action.type) {
    case CLEAR_MESSAGE:
      return {}
    case SET_MESSAGE:
      return ({
        message: action.payload,
        expires: new Date().getTime() + messageTimeout,
      })
    default:
      return state
  }
}